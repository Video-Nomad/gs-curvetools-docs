.. currentmodule:: <index>

#############
Warp Function
#############

Intro
^^^^^
.. figure:: https://i.imgur.com/VCkn9w8.png
	:class: with-shadow float-right
	:width: 150px

Warp button allows for an entire new level of customization of your curves as it allows to bind any selected geometry to a curve AND it also supports binding Curve Cards and Curve Tubes to a single curve, keeping the original geometry shape intact.

Warp button will create a group in the outliner, called **warpGroup** or **warpGeo**. Just like with any other group in GS CurveTools, you can rename it to anything you like or group it with other groups, but do not rename or move anything inside this group.


Binding Geometry to a Curve
^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. figure:: https://i.imgur.com/EJTfkPy.gif
	:class: with-shadow float-right
	:width: 350px

**Warp** function can attach any selected geometry (as long as it's one mesh) to any selected curve. It will automatically detect if there is a geometry selection and choose the first selected curve as its target.

After you attach the selected geometry, a new group will be created in the Outliner - **warpGeo**. This group is fully compatible with the layers system and can be duplicated using **"Duplicate"** button.

Original geometry should be roughly **aligned** to any of the three main axis of the world: X,Y,Z. Any deviation from major axis will result in deformation.

|

.. figure:: https://i.imgur.com/5J0s2Dh.gif
	:class: with-shadow float-right
	:width: 350px
	
If geometry is aligned but was bound in the wrong axis, you can use **"Axis Control"** in the **Curve Control Window** to manually select desired axis. This misalignment can happen if original geometry shape is scaled in a way that makes it wider than its length/height.

|
|
|

Binding Curve Cards/Tubes to a Curve
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. figure:: https://i.imgur.com/PlxkCZd.gif
	:class: with-shadow float-right
	:width: 350px

You can now bind any number and arrangement of Curve Cards/Tubes to one curve for ease of control.

All the attributes and UVs of the original curves will stay the same.

Original geometry will keep its shape, so if you created a hair braid and then want to position it on your model, you can do that with Warp.

Binding Curves to a Curve will create a new group called "warpGroup" and place it in the selected Layer in the layers menu.

You can use Axis Control in the Curve Control Window to change the axis manually or to Flip the direction of bound geometry.

.. figure:: https://i.imgur.com/vzrDdlf.gif
	:class: with-shadow float-right
	:width: 350px

You can **switch back to the original curves and modify** them at any moment using **"Edit Orig. Curves"** button in the **Curve Control Window**. Any changes you make to the original curves will propagate back to its bound copy. You can also freely change any attribute of the original curve or change the UVs, and changes will propagate to the bound copy.

|
|
|
|

Using Maya Deformers on Warp Group
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. figure:: https://i.imgur.com/aifSVpA.gif
	:class: with-shadow float-right
	:width: 350px

You can also use **Maya Non-Linear Deformers** and **Lattice** on the original curves. You can then either keep them or simply select original curves and Delete by Type -> History (Alt + Shift + D)

