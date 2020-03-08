.. currentmodule:: <index>

#################
Utility Functions
#################

Intro
^^^^^

.. figure:: https://i.imgur.com/gG0L4Co.png
	:alt: Utility Section
	:class: with-shadow float-right
	:width: 150px

Utility Section expands the functionality of GS CurveTools plug-in and allows for fast rebuilding, duplication, smoothing, extending and reducing the curve.

It also holds Control Curve function and Curve Control Window button.

|
|

Rebuild Curve Slider
^^^^^^^^^^^^^^^^^^^^

.. figure:: https://i.imgur.com/iJmNzFq.gif
	:alt: Utility Section
	:class: with-shadow float-right
	:width: 300px

**Rebuild Curve Slider** is a fast way to change the density of curve CVs maintaining the original shape of the curve and visualizing the process of rebuilding.

**Rebuild Curve Slider** works on any number of selected curves. It also works on regular curves, not only on **GS CurveTools** generated ones.

Simply select any number of curves in the viewport and start dragging the slider. You will see the preview of the final curve, and old curve will still be there as a reference.

**Releasing the Slider** will apply the changes to the curve.

You can also **Manually Type** values in the **Value Field** and as soon as you press **Enter**, selected curves will be rebuilt.

Typing the value over default 50 will still work and **expand the range of the slider** to double of the typed value (if you type 51, it will expand the slider range to 102 and so on).

.. figure:: https://i.imgur.com/OjIrCAY.png
	:alt: Utility Section
	:class: with-shadow float-right
	:width: 25px

If you want to **return to original precision** and range of the slider, simply click on the **"Reset Slider"** button. **"Reset Slider"** button will not rebuild your curve, only dragging the slider or typing values will.

Duplicate
^^^^^^^^^

.. figure:: https://i.imgur.com/jUXxtMd.png
	:class: with-shadow float-right
	:width: 150px

Probably one of the most important and at the same time the most simple function is **Duplicate**.

.. figure:: https://i.imgur.com/Hl7IbTc.gif
	:class: with-shadow float-right
	:width: 250px

**Duplicate** will duplicate any selected number of curves and all of their components.

Duplicated curves are fully functional, have the same material etc.

**Duplicate** also works if you select Group instead of curve.

**Duplicate** is fully compatible with Warp Geometry and Curves bound by Warp function.

**Duplicate** will respect Outliner grouping and hierarchy and put new duplicated curves next to the original ones.

Extend, Reduce and Smooth
^^^^^^^^^^^^^^^^^^^^^^^^^

.. figure:: https://i.imgur.com/xTovbr5.gif
	:class: with-shadow float-right
	:width: 250px

**Extend and Reduce** will simply lengthen and shorten the curve based on the Factor slider.

Extend will try to interpolate the next point based on the curvature of the curve. However, on high Factor values this can behave unpredictably.

|
|
|

.. figure:: https://i.imgur.com/tXmN6Jd.gif
	:class: with-shadow float-right
	:width: 250px

**Smooth** function will smooth the selected curve or only selected CVs, depending on the selection.

You can smooth multiple curves at the same time.

You can smooth CVs on multiple curves at the same time. Just select the curves, switch to Component Mode (F8) and select the CVs.

.. note:: For CVs smoothing to work you need to select at least 3 CVs on each selected curve. Curves with less than 3 CVs selected will be skipped.

.. figure:: https://i.imgur.com/0iNl6ZA.png
	:class: with-shadow float-right
	:width: 250px

Smooth button also has Marking Menu where you can select Smoothing Multiplier. 

To access sooth marking menu, simply Hold Right Mouse Button over the Smooth Button. 

You can select from x1, x3, x5 and x10 multipliers. They will increase the strength of the smoothing.

Control Curve
^^^^^^^^^^^^^
.. figure:: https://i.imgur.com/0KZaSft.png
	:class: with-shadow
	:width: 150px

.. figure:: https://i.imgur.com/sAuPJ2L.gif
	:class: with-shadow float-right
	:width: 250px

**Control Curve** is a special deformer created to control multiple curves at the same time.

Select multiple curves and click on Control Curve button. A new curve will be generated in the middle of the selected curves. Deforming this curve will also deform any bound curve.

.. figure:: https://i.imgur.com/YgkTIXD.png
	:class: with-shadow
	:width: 80px

To Apply the deformer, simply select the Control Curve and click **Apply** button.


.. Note:: There might be some warnings during the creation of the Control Curve like "No points were weighted to the wrap". Ignore them.
