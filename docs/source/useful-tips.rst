.. currentmodule:: <index>

###########
Useful Tips
###########
Better Transparency Settings Viewport
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

There are three transparency presets that can be changed in the :ref:`options<options>` menu. It is recommended to use Depth Peeling mode for best transparency rendering.

Better Curve Visibility
^^^^^^^^^^^^^^^^^^^^^^^

Selecting individual curves can be a challenging task, especially if you are not using enough layers and keep curves from those layers visible at all times.

There are a few ways you can improve that:

.. figure:: images/xray-mode.gif
  :align: right
  :width: 250px

  XRay mode toggled by hotkey

1. Use XRay mode and set hotkey to toggle it. XRay mode in Maya will make every geometry and curve semi-transparent and it can be extremely helpful when searching for the curve that needs to be selected.
2. Use :ref:`Curve Colors<layer-customization>`.
3. Increase :ref:`Curve Thickness<options>`.
4. User :ref:`Advanced Visibility<advanced-visibility>` options and bind some hotkeys to it.

|
|

Curve Thickness
^^^^^^^^^^^^^^^

.. image:: images/global_curve_thickness_window.png
  :align: right
  :width: 200px

You can change the thickness of the curves globally or for each curve individually.

To change curve thickness globally go to GS CurveTools :ref:`Options<options>` -> Global Curve Thickness.

.. figure:: images/curve_thickness_demo.gif
  :width: 350px
  :align: right

  Curve Thickness changed on selected curves

You can also change curve thickness manually in :ref:`Curve Control Window<attributes>` using number field on the top right. This will not change global curve thickness. Only selected curves will be affected.
