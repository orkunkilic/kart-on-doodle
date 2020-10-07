from numpy import expand_dims
from keras.preprocessing.image import load_img
from keras.preprocessing.image import img_to_array
from keras.preprocessing.image import ImageDataGenerator
from matplotlib import pyplot
from PIL import Image
import glob
import os
import shutil

i = 0
data_dir = 'images'
val_dir = 'validation'
if os.path.exists(data_dir):
    shutil.rmtree(data_dir)
os.makedirs(data_dir)

image_list = []
for filename in sorted(glob.glob('./flappy/*.png')):
    im = Image.open(filename)
    image_list.append(im)

for img in image_list:
    i += 1
    # convert to numpy array
    data = img_to_array(img)
    # create new folder for each augmented image
    alt_dir = data_dir + '/' + str(i)
    alt_val_dir = val_dir + '/' + str(i)
    os.makedirs(alt_dir)
    os.makedirs(alt_val_dir)
    # expand dimension to one sample
    samples = expand_dims(data, 0)
    # create image data augmentation generator
    it1 = ImageDataGenerator(horizontal_flip=True).flow(samples, batch_size=1,
                                                        save_to_dir=alt_dir,
                                                        save_prefix="aug",
                                                        save_format="png",)

    it2 = ImageDataGenerator(rotation_range=90).flow(samples, batch_size=1,
                                                        save_to_dir=alt_dir,
                                                        save_prefix="aug",
                                                        save_format="png",)

    it3 = ImageDataGenerator(brightness_range=[0.2,1.0]).flow(samples, batch_size=1,
                                                        save_to_dir=alt_dir,
                                                        save_prefix="aug",
                                                        save_format="png",)

    it4 = ImageDataGenerator(zoom_range=[0.5,1.0]).flow(samples, batch_size=1,
                                                        save_to_dir=alt_dir,
                                                        save_prefix="aug",
                                                        save_format="png",)

    it5 = ImageDataGenerator(horizontal_flip=True).flow(samples, batch_size=1,
                                                        save_to_dir=alt_val_dir,
                                                        save_prefix="aug",
                                                        save_format="png",)

    it6 = ImageDataGenerator(rotation_range=90).flow(samples, batch_size=1,
                                                        save_to_dir=alt_val_dir,
                                                        save_prefix="aug",
                                                        save_format="png",)

    it7 = ImageDataGenerator(brightness_range=[0.2,1.0]).flow(samples, batch_size=1,
                                                        save_to_dir=alt_val_dir,
                                                        save_prefix="aug",
                                                        save_format="png",)

    it8 = ImageDataGenerator(zoom_range=[0.5,1.0]).flow(samples, batch_size=1,
                                                        save_to_dir=alt_val_dir,
                                                        save_prefix="aug",
                                                        save_format="png",)
    # generate samples and plot
    for j in range(9):
        # generate batch of images
        batch1 = it1.next()
        batch2 = it2.next()
        batch3 = it3.next()
        batch4 = it4.next()
        # convert to unsigned integers for viewing
        image = batch1[0].astype('uint8')
        image = batch2[0].astype('uint8')
        image = batch3[0].astype('uint8')
        image = batch4[0].astype('uint8')

    # generate samples and plot
    for k in range(3):
        # generate batch of images
        batch5 = it5.next()
        batch6 = it6.next()
        batch7 = it7.next()
        batch8 = it8.next()
        # convert to unsigned integers for viewing
        image = batch5[0].astype('uint8')
        image = batch6[0].astype('uint8')
        image = batch7[0].astype('uint8')
        image = batch8[0].astype('uint8')
