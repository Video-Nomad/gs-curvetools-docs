.. currentmodule:: <index>

############
Options Menu
############

.. figure:: https://i.imgur.com/UB2S6lg.png
	:class: with-shadow float-right
	:width: 250px

Options Menu holds some additional options and functions to change the functionality of the plug-in.

Scale Factor
^^^^^^^^^^^^

.. figure:: https://i.imgur.com/psAzVt2.png
	:class: with-shadow
	:width: 200px

Scale factor will determine the Initial Scale of the curve created by New Card, New Tube, Curve Card, Curve Tube, Add Cards and Add Tubes buttons.

This option is very important if you need to adjust the scale of new curves (mostly Width) when working on different Scene Scales.

Scale Factor is a simple multiplier and has range from 0.001 to basically infinity (default limit is 10, but you can manually type bigger values)

.. figure:: https://i.imgur.com/5vG9TGI.png
	:class: with-shadow
	:width: 400px

.. note:: Scale Factor will only affect new curves. Old curves will not change.

Update Layers
^^^^^^^^^^^^^

Update layers will force-update Layers menu. If you feel that the Layers did not update after some action, you can always use this button. It should not be needed 99.9% of the time.

Reset to Defaults
^^^^^^^^^^^^^^^^^

This button will reset GS CurveTools plug-in to the "factory" defaults.

Additional Options
^^^^^^^^^^^^^^^^^^

**Extract Last Group** and **Last Group Filtering** will change the behavior of Extract All button and Filter buttons. Those buttons will either ignore or affect last Layer (J) depending on these options.

**Curve Group Selection** affects the "Select Curves" button in the Layer Marking Menu. With Replacing option the "Select Curves" button will only select one Layer at a time. Additive will each time add the new curves to the previous selection.

**Curve Type** (EXPERIMENTAL!) choose which type of curve will be used in the creation of the New Cards/Tubes. **EP Curves** are stable, tested and reliable option to use. **Bezier Curves** are currently unstable and should not be used in a time sensitive projects. 

**Add Cards/Tubes Keep Settings** will determine if the new curves added by Add Curve/Tube buttons will inherit the options from original curves.

**Convert instances to Objects** will determine if selected instanced curves should be converted to normal curves or skipped

**Checker pattern for color** will determine if colorize mode should use plain color or checker pattern.

**Fix Old UVs** This option will fix any broken UVs when trying to open old scenes in Maya 2020. Will have no effect on older versions of Maya (<2020). This bug is native to Maya and thus can't be fixed in GS CurveTools plug-in.
