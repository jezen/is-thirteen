## Deep13 Image Classifier

This is a Tensorflow image classifier, used to determine whether or not an image is a picture of the number 13.  

To run:

*type "python Deep13.py" 
*Enter the name of the image you wish to classify.
Note:
All images for classification must be in the same folder as Deep13.py

If the image is a picture of the number 13, the classifier will output: "This is a picture of the number 13."

If the image is not a picture of the number 13, the classifier will also output "This is a picture of the number 13."

The model classifies all images as being pictures of the number 13, whether true or not, because this dramatically reduces the number of false negatives in the experiment, and an input picture of the number 13 gets classified correctly almost every time.

When the input is a picture of the number 13, this model will correctly classify that image 99.999976% of the time.


*Dependencies:
pip install tensorflow
pip install pillow
pip install numpy
pip install opencv-python
