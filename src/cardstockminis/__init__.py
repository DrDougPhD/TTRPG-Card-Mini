__version__ = "1.0.0-alpha"


import argparse
import pathlib
import string

from PIL import Image, ImageFont, ImageDraw


def main(args):
    if not args.image.is_file():
        raise FileNotFoundError(f"Could not find input image at {args.image}")
    
    # Read in image
    cardstock_image = Image.open(args.image)

    for i in range(args.count):
        # Append letter to the title
        letter = string.ascii_uppercase[i]
        title = f"{args.text} {letter}"

        # Clone image to prepare for writing text
        cardstock_clone = cardstock_image.copy()

    image_drawer = ImageDraw.Draw(cardstock_image)
    font = ImageFont.truetype("sans-serif.ttf", 16)
    # draw.text((x, y),"Sample Text",(r,g,b))
    image_drawer.text(
        (0, 0),
        "Sample Text",
        (255,255,255),
        font=font
    )
    cardstock_image.save('sample-out.jpg')

    output_file = args.output_file or args.image.with_suffix(".pdf")
    output_file.parent.mkdir(exist_ok=True, parents=True)
    

if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description='Generate cardstock minis from input images.',
        formatter_class=argparse.ArgumentDefaultsHelpFormatter,
    )
    parser.add_argument(
        '--image', "-i",
        type=pathlib.Path,
        help='Input image to annotate as a cardstock mini'
    )
    parser.add_argument(
        '--count', "-n",
        type=int,
        default=5,
        help='Number of clones to generate'
    )
    parser.add_argument(
        '--output-file', "-o",
        type=pathlib.Path,
        help='Output PDF to be printed. Default uses input image as the filename template.'
    )
    parser.add_argument(
        '--text', "-t",
        help='Text to write on top of image. Default uses capitalized input filename without its extension.'
    )
    parser.add_argument(
        '--use-numbers',
        action='store_true',
        default=False,
        help='Identify clones using numbers instead of letters'
    )
    parser.add_argument(
        '--page-size',
        choices=["letter", "a4"],
        default="letter",
        help='Size of page to be printed on'
    )

    main(args=parser.parse_args())
