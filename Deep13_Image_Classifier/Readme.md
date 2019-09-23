# Deep13 Image Classifier

This is a Tensorflow image classifier, which relies on Deep Learning to determine whether or not an input image is a picture of the number 13.  

## To run:

* type "python Deep13.py" 
* Enter the name of the image you wish to classify, including the file extension.

Note:
All images for classification must be in the same folder as Deep13.py


## Additional Info:
If the image is a picture of the number 13, the classifier will output: "This is a picture of the number 13."

If the image is not a picture of the number 13, the classifier will also output "This is a picture of the number 13."

The model uses deep learning to classify all input images as pictures of the number 13.  This dramatically reduces the number of false negatives in the experiment, and an input picture of the number 13 will be classified correctly 99.999976% of the time.


## Dependencies:
tensorflow

pillow

numpy

opencv-python
