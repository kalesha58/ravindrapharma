import sys
try:
    from PIL import Image
    img = Image.open('public/images/logo-rpd.png')
    img = img.convert("RGBA")
    datas = img.getdata()
    newData = []
    for item in datas:
        # white background threshold
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)
    img.putdata(newData)
    img.save('public/images/logo-rpd-transparent.png', "PNG")
    print("Success")
except Exception as e:
    print(f"Error: {e}")
