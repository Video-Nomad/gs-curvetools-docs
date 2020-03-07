.. currentmodule:: <index>

################
Curve Attributes
################

Intro
^^^^^

Curve Cards and Tubes created by GS CurveTools plug-in have a lot of attributes (or settings) that are unique for each individual curve. These attributes allow you to control how geometry is deformed (twisted, oriented or profiled), how textures are displayed (UV attributes) and geometry thickness (solidify).

All of the attributes can be found in **Curve Control Window** or directly in the **Channel Box** when pathCurve is selected.

There are 3 main types of attributes:

- **Sliders** with number fields - most common type of attribute. Drag the slider to change.

- **Checkboxes** - these will either activate some function or switch between two states.

- **Graphs** - graphs provide with advanced control over some attributes of the curve.

Some attributes are common for all types of curves. Others can only be found on, for example, Tubes or Warp Cards, etc.

**Warp** function has its own set of attributes because of the unique way it binds geometry.

Main Attributes
^^^^^^^^^^^^^^^

.. figure:: https://i.imgur.com/tjoOSpR.png
	:class: with-shadow float-right
	:width: 250px

- **Axis Control** - Only for Custom Warp geometry. This menu will control the axis at which the geometry is bound the the curve. By default it is set on Auto and generally it works just fine. If you notice that geometry is bound to the curve in a wrong direction, try changing this attribute.

|

- **Edit Original Curves** (Edit Orig. Curves) - Only for Custom Warp geometry. This button allows to edit original curves when you are using Warp Function on an already existing curves. Clicking on this button will go "one step backwards" on in the Custom Warp group. Clicking on this button again will return the curves back to their bound state. Refer to Warp Function documentation for further details.

|

.. figure:: https://i.imgur.com/LDMpwPP.png
	:class: with-shadow float-right
	:width: 250px

- **Length Division** (L-Div) - changes length division of the geometry.

|

.. figure:: https://i.imgur.com/chMirsJ.png
	:class: with-shadow float-right
	:width: 250px

- **Width Division** (W-Div) - changes width division of the geometry.

|

.. figure:: https://i.imgur.com/scB7Mhl.png
	:class: with-shadow float-right
	:width: 250px

- **Orientation** (Orien) - changes the orientation of the geometry. Rotates the geometry around the curve.

|

.. figure:: https://i.imgur.com/SDd7nw3.gif
	:class: with-shadow float-right
	:width: 250px

- **Twist** - twists the geometry around the curve

|
|

.. figure:: https://i.imgur.com/uO0J6rz.png
	:class: with-shadow float-right
	:width: 250px

- **Twist Curve Graph** - Only for Warp geometry. Allows for precise control of the twisting along the curve. You can add or remove additional control points if needed.

	- **M:** field will change the Magnitude of the twisting. Essentially it increases or decreases the effect of the Twist Curve Graph.
	- **Reset Curve** will reset the graph to its default state.
	- **^** button will open a pop-out Twist Curve Graph that can be resized by user.

|

.. figure:: https://i.imgur.com/Bv2I38U.png
	:class: with-shadow float-right
	:width: 250px

- **Width** - uniformly changes width of the geometry along the curve

|
|
|

.. figure:: https://i.imgur.com/Ey2E2eN.gif
	:class: with-shadow float-right
	:width: 250px

- **WidthX and WidthZ** - Only for Tubes. Individually changes width along X and Z axis of the tube. You can also lock these two sliders together to change the width uniformly.

|
|
|
|

.. figure:: https://i.imgur.com/wWROJSO.png
	:class: with-shadow float-right
	:width: 250px

- **Width Curve Graph** - Only for Warp geometry. Allows for precise control over the width of the geometry along the curve.

	.. figure:: https://i.imgur.com/OQ6zOkn.png
		:class: with-shadow float-right
		:width: 250px

	- In case of width, Magnitude can be controlled by normal Width Slider
	- **Reset Curve** will reset the graph to its default state.
	- **^** button will open a pop-out Twist Curve Graph that can be resized by user.

|
|
|
|

.. figure:: https://i.imgur.com/rvOHrZ0.png
	:class: with-shadow float-right
	:width: 250px

- **Taper** - Adds positive or negative tapering to the geometry.

|
|
|
|
|
|
|

.. figure:: https://i.imgur.com/oNojAth.png
	:class: with-shadow float-right
	:width: 250px

- **Profile** - Adds positive or negative profile to the geometry.

|
|

.. figure:: https://i.imgur.com/0F4rfYw.png
	:class: with-shadow float-right
	:width: 250px

- **Refine** - Adds additional "virtual" CVs to a curve to achieve additional precision in geometry deformation. Real CVs stay the same. If you see that geometry is not exactly on the curve (this can sometimes happen on long curves), just increase Refine value.

	.. note:: High Refine values (over 150) can have negative impact on the responsiveness of the curve.

.. figure:: https://i.imgur.com/B9FHSmp.png
	:class: with-shadow float-right
	:width: 250px

- **Smooth** - This attribute (do no confuse it with Smooth Function in the Main Menu) will interactively smooth pinched or highly deformed parts of the curve.

|
|

- **Normals and Reverse Normals** - Only for Tubes. Slider will smoothen or harden normals on the surface of the curve based on selected angle. Checkbox will flip normals direction.

|

.. figure:: https://i.imgur.com/lrof51D.gif
	:class: with-shadow float-right
	:width: 250px

- **Length Unlock and Length** - Only for Warp geometry. This checkbox and attribute slider will unlock the stretching of the geometry and allow for manual stretching along the curve. By default geometry is fully stretched along the curve.

|


.. figure:: https://i.imgur.com/V7oxsUB.gif
	:class: with-shadow float-right
	:width: 250px

- **Offset** - Only for Warp geometry. This slider will control the offset of the geometry along the curve. Geometry will automatically follow straight line after it leaves the curve it is attached to.

|
|

- **Sampling Accuracy** - Only for Custom Warp geometry. This slider will increase or decrease the accuracy of the deformation for custom warp geometry.

.. note:: For UV attributes, please visit :ref:`uvs` chapter.

Solidify Attributes
^^^^^^^^^^^^^^^^^^^

.. figure:: https://i.imgur.com/G3lqcLO.gif
	:class: with-shadow float-right
	:width: 250px

**Solidify** allows you to add thickness to the geometry. Thickness is added in a procedural way so that every other function and attribute is still fully functional. Just tick the "Solidify" checkbox to proceed.

.. figure:: https://i.imgur.com/89iZk5f.gif
	:class: with-shadow float-right
	:width: 250px

- **Solidify Thickness** will increase the thickness of the solidified geometry.

.. figure:: https://i.imgur.com/7aV9bW4.gif
	:class: with-shadow float-right
	:width: 250px

- **Solidify Divisions** will increase the number of divisions that new solidified geometry has.

.. figure:: https://i.imgur.com/f4FzLXB.gif
	:class: with-shadow float-right
	:width: 250px

- **Scale X, Scale Y and Offset** will change the profile of the solidified geometry. The main difference between them is that offset works more uniformly.

- **Solidify Normals** (SNormals) will change the hardness of normals along the solidified edges.

.. note:: To use better precision than sliders can provide we can either stretch the Curve Control Window or use combination of Ctrl + Left Mouse Button Drag on the Value Fields.

Transferring Attributes
^^^^^^^^^^^^^^^^^^^^^^^

.. figure:: https://i.imgur.com/DLijcFH.png
	:class: with-shadow float-right
	:width: 100px

You can easily **copy** (or **transfer**) attributes from one curve to any number of other curves. For that, just use the provided **"Transfer Attr."** button. It will show you the **[Source]** curve when you click on it. Attributes are transferred from the **[Source]** curve to all other curves.

Transfer attributes works in two directions:

.. figure:: https://i.imgur.com/Yv6vnLV.gif
	:class: with-shadow float-right
	:width: 400px

- By default, it will transfer **From First Selected Curve** -> **To All Other Curves**.

|
|
|
|
|
|
|
|

.. figure:: https://i.imgur.com/JmsEkOI.gif
	:class: with-shadow float-right
	:width: 400px

- Using **Shift** modifier, you can reverse the direction of the transfer. It will now transfer **From Last Selected Curve** -> **To All Other Curves**.

|
|
|
|

.. note:: Transfer Attr. command is **multi selection compatible**, so you can transfer Attributes from one curve to any number of other curves in one click.
