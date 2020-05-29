.. currentmodule:: <index>

########################################
Frequently Asked Questions and Solutions
########################################

Here you can find some of the common questions/issues and possible solutions to them. 

This list is always updating.

Maya 2020 and Broken UVs
^^^^^^^^^^^^^^^^^^^^^^^^

**Issue:**

.. figure:: https://i.imgur.com/UHVsKCZ.png
	:class: with-shadow float-right
	:width: 250px

Only for Maya 2020. UVs are not working after save and reload of the scene. UV paramters are correct but UVs on the existing cards seem to be wrong. Changing UV parameters on cards created before the save has no effect. New cards are working correctly.

**Explanation:**

First of all, this issue is not related to GS CurveTools in any way.

This issue is related to Maya 2020, 2020.1 and 2020.2 and the new bug it has with saving/loading Maya Binary scene files (.mb). During the reload of the scene the inputComponents list used in polyMoveUV nodes is getting corrupted and shows as nmm[*] instead of map[*]. This bug was reported for Maya 2020, 2020.1, 2020.2 and was not fixed as of right now.

**Solution/Workaround:**

This issue only appears when loading Maya Binary (.mb) scene files and not Maya ASCII files (.ma). You can easily fix your already corrupted cards using a fix command built in to GS CurveTools plugin:

Steps: 

	1. Open your Maya Binary file 

	2. Apply the "Fix UV Bug" fix in the Options Menu of GS CurveTools 

	3. Save the scene as Maya ASCII using "Save Scene As" 

	4. It should now work perfectly fine 

Maya ASCII loading times can be a bit longer, but should work just fine in Maya 2020.

.. note:: This bug was reported to Autodesk and has a bug report number: BSPR-35061


Warp Card Orientation Flip
^^^^^^^^^^^^^^^^^^^^^^^^^^

**Issue:**

.. figure:: https://i.imgur.com/e7rqKlp.gif
	:class: with-shadow float-right
	:width: 200px

In some cases Warp bound geometry (Warp Cards, Tubes and Custom Geometry) can randomly flip its orientation and behave seemingly erratic.


**Explanation:**

The issue here lies within Maya itself and its **curveWarp** node and in particular its "Aim" or Normal Direction calculation. This issue only appears when the curve has its object space rotation in Y axis set to 90 degrees, or very close to 90. This confuses the algorithm and it flips the normal orientation when some part of the curve crosses a specific boundary. This results in geometry flipping its orientation.

**Solution/Workaround:**

Since this issues is fundamental to Maya and can't be fixed without rewriting the curveWarp node from scratch, the only thing that user can do is to **avoid using Y axis rotation** on the curve and primarily using **Orientation** parameter in Curve Control Window.

.. important:: To avoid the need of Y axis rotation it is also recommended to use Y-up axis World Coordinate System (default), over Z-up axis.

.. note:: In general using curve parameters such as **Width** and **Orientation** is recommended over Mayas Rotation and Scale parameters.


Can I use Z-up World Coordinates?
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

The plug-in should work just fine in Z-up, however you might encounter some issues like default cards being created in a different orientation and some inconsistencies in orientations of cards created using **Curve Card** and **Add Card** functions.

In general it is recommended to use Y-up world coordinates to avoid any incompatibilities.