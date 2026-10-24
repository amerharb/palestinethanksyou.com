// Rasterises the SVG that og-image.mjs builds. AppKit renders SVG natively, so
// this needs no dependency — but it does need macOS. See og-image.mjs.
//
//     swift og-image.swift <in.svg> <out.png> <width> <height>

import AppKit

let args = CommandLine.arguments
guard args.count == 5,
      let width = Int(args[3]), let height = Int(args[4]) else {
    FileHandle.standardError.write("usage: og-image.swift <in.svg> <out.png> <width> <height>\n".data(using: .utf8)!)
    exit(2)
}

guard let image = NSImage(contentsOf: URL(fileURLWithPath: args[1])) else {
    FileHandle.standardError.write("could not load \(args[1])\n".data(using: .utf8)!)
    exit(1)
}

guard let rep = NSBitmapImageRep(
    bitmapDataPlanes: nil, pixelsWide: width, pixelsHigh: height,
    bitsPerSample: 8, samplesPerPixel: 4, hasAlpha: true, isPlanar: false,
    colorSpaceName: .deviceRGB, bytesPerRow: 0, bitsPerPixel: 0) else {
    FileHandle.standardError.write("could not allocate the bitmap\n".data(using: .utf8)!)
    exit(1)
}
rep.size = NSSize(width: width, height: height)

NSGraphicsContext.saveGraphicsState()
NSGraphicsContext.current = NSGraphicsContext(bitmapImageRep: rep)
image.draw(in: NSRect(x: 0, y: 0, width: width, height: height),
           from: .zero, operation: .copy, fraction: 1.0)
NSGraphicsContext.restoreGraphicsState()

guard let png = rep.representation(using: .png, properties: [:]) else {
    FileHandle.standardError.write("PNG encoding failed\n".data(using: .utf8)!)
    exit(1)
}
try png.write(to: URL(fileURLWithPath: args[2]))
