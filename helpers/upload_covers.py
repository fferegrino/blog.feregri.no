# +
from urllib.request import urlretrieve

from imagekitio import ImageKit
from imagekitio.models.ListAndSearchFileRequestOptions import ListAndSearchFileRequestOptions
from imagekitio.models.UploadFileRequestOptions import UploadFileRequestOptions
from urllib.parse import urlparse
from PIL import Image
import os
import base64
from dotenv import load_dotenv

load_dotenv()

imagekit = ImageKit(
    private_key=os.environ['IMAGEKIT_PRIVATE_KEY'],
    public_key=os.environ['IMAGEKIT_PUBLIC_KEY'],
    url_endpoint='https://ik.imagekit.io/thatcsharpguy'
)
# -

books_folder = '/feregri_no/book-covers/'

# +
options = ListAndSearchFileRequestOptions(
    type='file',
    sort='ASC_CREATED',
    path=books_folder,
    file_type='all',
)

result = imagekit.list_files(options=options)

existing_covers = {
    file.name.partition('.')[0] for file in result.list
}
# -

options = UploadFileRequestOptions(
    use_unique_file_name=False,
    folder=books_folder,
    is_private_file=False,
    overwrite_file=True,
    overwrite_ai_tags=False,
    overwrite_tags=False,
)

# ## O'Reily

# +
oreilly_books = [
    '9781098106218 9781098106225',
    '9781491903063 1449373321',
    '9781098107956 9781098107963',
    '9781491907344 9781491907368',
    '9781492072935 9781492072942',
    '9781492089452 9781492089469',
    '9781492041122 9781492041085',
    '9781098104023 9781098104030',
    '9781491963036 1491963042',
    '9781098125967 9781098125974',
    '9781492035633 9781492035596',
    '9781491960493 9781491928424',
    '9781492045519 9781492045526',
    '9781492045342 1492045357',
    '9781491978221 1491978236',
    '9781492041931 9781492041948',
    '9781492056348 9781492056355',
    '9781492057680 9781492057642',
    '9781492055013 9781492055020',
    '9781491922927 9781491922941'
]


for entry in oreilly_books:
    oid, _, isbn = entry.partition(' ')
    if isbn not in existing_covers:
        imagekit.upload_file(file=f'https://learning.oreilly.com/library/cover/{oid}/1000w/', # required
                                  file_name=f'{isbn}.jpeg', # required
                                  options=options)
# -


# ## Manning

# +
manning_books = [
    '9781617294433 https://images.manning.com/360/480/resize/book/7/65fca1c-6826-472d-bbea-c1d4a7b3c570/Chollet-DLP-HI.png',
    '9781617297762 https://images.manning.com/360/480/resize/book/0/adb6d0b-0038-4391-ba4a-5ad6e4775379/Osipov-HI.png',
    '9781617299193 https://images.manning.com/264/352/resize/book/a/4693c89-31e2-43ab-9bc6-d99045ec1451/Tuulos-HI.png',
    '9781617296246 https://images.manning.com/264/352/resize/book/1/bea60fb-05d3-480a-bef1-08393500e222/Robinson_DataScience_hires.png'
]

def parse_url(url):
    parsed = urlparse(url)
    return f'https://{parsed.netloc}/' + ('/'.join(parsed.path.split('/')[4:]))


for entry in manning_books:
    isbn, _, url = entry.partition(' ')
    
    if isbn in existing_covers:
        continue

    png = f'./{isbn}.png'
    jpeg = f'./{isbn}.jpeg'
    if not os.path.exists(png):
        url = parse_url(url)
        urlretrieve(url, png)

    im = Image.open(png)
    rgb_im = im.convert('RGB')
    rgb_im.save(jpeg, quality=100)

    with open(jpeg, "rb") as img:
        imgstr = base64.b64encode(img.read())
        imagekit.upload_file(
            file=imgstr, # required
            file_name=f'{isbn}.jpeg', # required
            options=options)
# -

# +
others = [
    '0387310738 https://m.media-amazon.com/images/I/71pdg8S7QBL.jpg',
    '0387848576 https://m.media-amazon.com/images/I/51gleGGYGGL.jpg',
    '0262018020 https://m.media-amazon.com/images/I/61teoUfX0UL.jpg',
    '0262035618 https://m.media-amazon.com/images/I/A1GbblX7rOL.jpg',
    '1119002257 https://m.media-amazon.com/images/I/71EN1l+uQKL.jpg',
    '0393358429 https://m.media-amazon.com/images/I/51+SJ9Zj+bL.jpg',
    '1617293709 https://m.media-amazon.com/images/I/818bQozIfHL.jpg',
    '1680508601 https://pragprog.com/titles/bopytest2/python-testing-with-pytest-second-edition/bopytest2.jpg'
]
for entry in others:
    isbn, _, url = entry.partition(' ')
    
    if isbn in existing_covers:
        continue

    # png = f'./{isbn}.png'
    jpeg = f'./{isbn}.jpeg'
    if not os.path.exists(jpeg):
        urlretrieve(url, jpeg)

    # im = Image.open(png)
    # rgb_im = im.convert('RGB')
    # rgb_im.save(jpeg, quality=100)

    with open(jpeg, "rb") as img:
        imgstr = base64.b64encode(img.read())
        imagekit.upload_file(
            file=imgstr, # required
            file_name=f'{isbn}.jpeg', # required
            options=options)

# -



