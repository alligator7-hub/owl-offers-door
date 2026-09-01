#!/usr/bin/env python3
"""Generate og.png (1200x630) and apple-touch-icon.png (180x180)."""

from __future__ import annotations

import struct
import zlib
from pathlib import Path

OUT = Path(__file__).resolve().parents[1] / "public"


def _chunk(tag: bytes, data: bytes) -> bytes:
    return struct.pack(">I", len(data)) + tag + data + struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF)


def write_png(path: Path, width: int, height: int, rgba_rows: list[bytes]) -> None:
    raw = b"".join(b"\x00" + row for row in rgba_rows)
    png = b"\x89PNG\r\n\x1a\n"
    png += _chunk(b"IHDR", struct.pack(">IIBBBBB", width, height, 8, 6, 0, 0, 0))
    png += _chunk(b"IDAT", zlib.compress(raw, 9))
    png += _chunk(b"IEND", b"")
    path.write_bytes(png)


def lerp(a: int, b: int, t: float) -> int:
    return int(a + (b - a) * t)


def mix(c1: tuple[int, int, int], c2: tuple[int, int, int], t: float) -> tuple[int, int, int]:
    return (lerp(c1[0], c2[0], t), lerp(c1[1], c2[1], t), lerp(c1[2], c2[2], t))


def pixel(rgb: tuple[int, int, int], a: int = 255) -> bytes:
    return bytes((*rgb, a))


BG = (9, 9, 8)
CREAM = (232, 217, 184)
COPPER = (196, 106, 58)
MUTED = (138, 132, 120)


def draw_og() -> None:
    w, h = 1200, 630
    rows: list[bytes] = []
    for y in range(h):
        row = bytearray()
        gy = y / h
        base = mix(BG, (18, 17, 15), gy * 0.5)
        for x in range(w):
            gx = x / w
            # faint copper wash upper-left
            wash = max(0.0, 1.0 - ((gx * 1.1) ** 2 + (gy * 0.9) ** 2) * 1.15)
            col = mix(base, (40, 24, 16), wash * 0.35)
            # grain
            n = ((x * 73 + y * 149) ^ (x * y)) & 7
            col = (min(255, col[0] + n), min(255, col[1] + n), min(255, col[2] + n))
            # left copper rule
            if 72 <= x <= 75:
                col = COPPER
            row += pixel(col)
        rows.append(bytes(row))

    # Word marks as block lettering would look crude; keep a quiet panel
    # and a large cream rectangle suggesting type — social cards still read
    # from og:title. Draw a simple owl mark + rule + cream bars for the line.
    def fill_rect(x0: int, y0: int, x1: int, y1: int, color: tuple[int, int, int]) -> None:
        for y in range(max(0, y0), min(h, y1)):
            buf = bytearray(rows[y])
            for x in range(max(0, x0), min(w, x1)):
                i = x * 4
                buf[i : i + 3] = bytes(color)
            rows[y] = bytes(buf)

    def fill_circle(cx: int, cy: int, r: int, color: tuple[int, int, int]) -> None:
        r2 = r * r
        for y in range(max(0, cy - r), min(h, cy + r + 1)):
            buf = bytearray(rows[y])
            dy = y - cy
            for x in range(max(0, cx - r), min(w, cx + r + 1)):
                dx = x - cx
                if dx * dx + dy * dy <= r2:
                    i = x * 4
                    buf[i : i + 3] = bytes(color)
            rows[y] = bytes(buf)

    # Owl
    fill_circle(140, 168, 42, CREAM)
    fill_circle(122, 164, 14, BG)
    fill_circle(158, 164, 14, BG)
    fill_circle(125, 161, 5, CREAM)
    fill_circle(161, 161, 5, CREAM)
    fill_rect(132, 176, 148, 190, COPPER)

    # "OWL OFFERS" bars (small caps stand-in)
    fill_rect(200, 150, 248, 158, CREAM)
    fill_rect(256, 150, 304, 158, MUTED)
    fill_rect(312, 150, 360, 158, MUTED)

    # Headline stand-in: two cream lines matching the real H1 length
    fill_rect(96, 280, 980, 312, CREAM)
    fill_rect(96, 340, 860, 372, CREAM)

    # Subline
    fill_rect(96, 430, 520, 442, MUTED)

    write_png(OUT / "og.png", w, h, rows)


def draw_icon() -> None:
    w = h = 180
    rows: list[bytes] = []
    for y in range(h):
        row = bytearray()
        for x in range(w):
            row += pixel((18, 17, 15))
        rows.append(bytes(row))

    def fill_circle(cx: int, cy: int, r: int, color: tuple[int, int, int]) -> None:
        r2 = r * r
        for y in range(max(0, cy - r), min(h, cy + r + 1)):
            buf = bytearray(rows[y])
            dy = y - cy
            for x in range(max(0, cx - r), min(w, cx + r + 1)):
                dx = x - cx
                if dx * dx + dy * dy <= r2:
                    i = x * 4
                    buf[i : i + 3] = bytes(color)
            rows[y] = bytes(buf)

    def fill_rect(x0: int, y0: int, x1: int, y1: int, color: tuple[int, int, int]) -> None:
        for y in range(max(0, y0), min(h, y1)):
            buf = bytearray(rows[y])
            for x in range(max(0, x0), min(w, x1)):
                i = x * 4
                buf[i : i + 3] = bytes(color)
            rows[y] = bytes(buf)

    fill_circle(90, 78, 52, CREAM)
    # lower body taper
    fill_circle(90, 108, 40, CREAM)
    fill_circle(68, 80, 18, BG)
    fill_circle(112, 80, 18, BG)
    fill_circle(72, 76, 6, CREAM)
    fill_circle(116, 76, 6, CREAM)
    fill_rect(80, 100, 100, 118, COPPER)
    write_png(OUT / "apple-touch-icon.png", w, h, rows)


if __name__ == "__main__":
    OUT.mkdir(exist_ok=True)
    draw_og()
    draw_icon()
    print("wrote", OUT / "og.png", "and", OUT / "apple-touch-icon.png")
