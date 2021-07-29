.. currentmodule:: <index>

########################################
Frequently Asked Questions and Solutions
########################################

Here you can find some of the common questions/issues and possible solutions to them. 

This list is always updating.

Maya 2020-2022 and Broken UVs
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

**Issue:**

.. figure:: images/broken_uvs_maya2020.png
	:class: with-shadow float-right
	:width: 250px

Only for Maya 2020 and 2022. UVs are not working after save and reload of the scene. UV parameters are correct but UVs on the existing cards seem to be wrong. Changing UV parameters on cards created before the save has no effect. New cards are working correctly.

**Explanation:**

First of all, this issue is not related to GS CurveTools in any way.

This issue is related to Maya 2020, 2020.1, 2020.2 and 2022 and the "new" bug it has with saving/loading Maya Binary scene files (.mb). During the reload of the scene the inputComponents list used in polyMoveUV nodes is getting corrupted and shows as nmm[*] instead of map[*]. This bug was reported for Maya 2020, 2020.1, 2020.2 and was not fixed as of right now.

**Solution/Workaround:**

This issue only appears when loading Maya Binary (.mb) scene files and not Maya ASCII files (.ma). You can easily fix your already corrupted cards using a fix command built in to GS CurveTools plugin:

Steps: 

	1. Open your Maya Binary file 

	2. Apply the "Fix Maya 2020-2022 UV Bug" fix in the Options Menu of GS CurveTools 

	3. Save the scene as Maya ASCII using "Save Scene As" 

	4. It should now work perfectly fine 

Maya ASCII loading times can be a bit longer, but should work just fine in Maya 2020.

.. note:: This bug was reported to Autodesk and has a bug report number: BSPR-35061

Graphs are Broken After Reloading
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

**Issue:**

In some rare cases Width or Twist graphs can become broken after the reload of Maya.
The issue is native to Maya and is caused by the CurveWarp node.

This issue has nothing to do with CurveTools or its code.

**Explanation:**

.. figure:: images/maya_graph_extreme_points.png
	:class: with-shadow float-right
	:width: 300px

Maya graphs can be corrupted during safe/reload sequence.

This only occurs when the graph nodes (dots on a graph) are in their extreme points (0 or 1) shown on the image.
It is something internal to CurveWarp node, to which there is no access. It is a compiled plug-in and it can't be fixed by anyone but Autodesk.

Autodesk repeatedly notified about this issue being fixed (at least in 2019 and 2022 release notes).
The issue persists still in the 2022.

The issue can be replicated without loading CurveTools, by simply creating a CurveWarp node with geo attached and making aforementioned changes to the built-in graphs.

**Solution/Workaround:**


.. figure:: images/resetting_the_graphs.gif
	:class: with-shadow float-right
	:width: 300px

Since this issue can't be fixed from my end, there's only workarounds. 

Until a more user-friendly solution is found, the only way to fix this is to click on the graph (when it's in broken state) adding a new node to it, and clicking on "Reset Curve" button to reset it to the default neutral state. After that graphs can be used again.

.. raw:: html

	<video width="320" height="240" controls>
		<source src="curve_warp_bug.mp4" type="video/mp4">
	</video>
	

|
|

Warp Card Orientation Flip
^^^^^^^^^^^^^^^^^^^^^^^^^^

**Issue:**

.. figure:: images/warp_card_orientation_flip.gif
	:class: with-shadow float-right
	:width: 200px

In some cases Warp bound geometry (Warp Cards, Tubes and Custom Geometry) can randomly flip its orientation and behave seemingly erratic.


**Explanation:**

The issue here lies within Maya itself and its **curveWarp** node and in particular its "Aim" or Normal Direction calculation. This issue only appears when the curve has its object space rotation in Y axis set to 90 degrees, or very close to 90. This confuses the algorithm and it flips the normal orientation when some part of the curve crosses a specific boundary. This results in geometry flipping its orientation.

**Solution/Workaround:**

Since this issues is fundamental to Maya and can't be fixed without rewriting the curveWarp node from scratch, the only thing that user can do is to **avoid using Y axis rotation** on the curve and primarily using **Orientation** parameter in Curve Control Window.

.. important:: To avoid the need of Y axis rotation it is also recommended to use Y-up axis World Coordinate System (default), over Z-up axis.

.. note:: In general using curve parameters such as **Width** and **Orientation** is recommended over Mayas Rotation and Scale parameters.

Geometry was Left Behind When Deleting Curves
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. figure:: images/structure_of_card_object.png
	:alt: Utility Section
	:class: with-shadow float-right
	:width: 200px

**Explanation:**

If the user deletes only the curve component (**pathCurve#**), but no the entire card group, in some cases (**warp cards, tubes**) there might be a leftover geometry in the scene.

**Solution/Workaround:**

The **correct** way to delete cards/tubes is to **delete the entire group** that holds all of the components of that card/tube. **Do not** delete only the curve (**pathCurve#**), delete the entire group (**curveCard, curveTube etc.**). Select the **Curve** -> **press UP** on the keyboard (this will select the entire card) -> **Delete**.

Can I use Z-up World Coordinates?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The plug-in should work just fine in Z-up, however you might encounter some issues like default cards being created in a different orientation and some inconsistencies in orientations of cards created using **Curve Card** and **Add Card** functions.

In general it is recommended to use Y-up world coordinates to avoid any incompatibilities.