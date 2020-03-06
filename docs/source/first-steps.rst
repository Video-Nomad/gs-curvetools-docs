.. currentmodule:: <index>

###########
First Steps
###########

Intro
^^^^^

GS CurveTools main function is to create and manipulate geometry that is bound to a curve.

This is useful in many ways. You can create hair cards for games. Belts and straps for characters. Tubes, pipes and cables for environments and much more.

GS CurveTools also allows for an advanced geometry manipulation, for example complex braided cables, hair braids, clusters of hair cards all controlled by a single curve in a natural way.

In this chapter we will go through the main concepts of the plug-in.

.. note:: If you want in-depth functionality explanation, please select appropriate chapter from the Table of Contents on the left.

Basic Workflow Example
^^^^^^^^^^^^^^^^^^^^^^

.. figure:: https://i.imgur.com/I3HO5NH.png
	:alt: Utility Section
	:class: with-shadow float-right
	:width: 200px

Start by creating a simple curve card with Add Card button. Now try modifying the curve that was created. 

.. figure:: https://i.imgur.com/RpXP1lK.png
	:alt: Utility Section
	:class: with-shadow float-right
	:width: 100px

You can switch to "Control Vertex" editing mode by selecting "Select by Component Type" in the Maya Menu or by pressing F8. 

.. figure:: https://i.imgur.com/kdpgInp.png
	:alt: Utility Section
	:class: with-shadow float-right
	:width: 200px

You can also access Marking Menu of the curve by holding RMB. There you can switch between control vertex and object selection modes.

Now open Curve Control Window by pressing the button with the same name.

Here you will find all the main controls for the curve.

Now select your curve and click Duplicate button. You now have two curves with the same attributes, UVs and material.

.. note:: To read about UVs setup, please read the appropriate section in the Table of Contents.

By default, Layer 0 is selected and all new curves will go there. You can switch between layers by simply clicking on them. All the new curves (except for duplicated ones) will go into selected layers. Duplicated curves will inherit the layer of the original selected curve.

Main Menu
^^^^^^^^^

Main Menu is a simple window that can be docked to any place within Maya main window

Main Menu is split into 5 logical sections:

	.. figure:: https://i.imgur.com/eYsUOBZ.png
		:alt: Options Section
		:class: with-shadow float-right
		:width: 150px

#. On the top of the menu is **Options, Help and About** drop down menus:

	a. **Options** menu holds various tweaks that you can use to alter functionality of the plug-in

	#. **Help** menu holds main links to documentation as well as contacts and social media links of the author

	#. **About** menu holds information about the version of the plug-in and licensing details

	.. figure:: https://i.imgur.com/Bi42bdg.png
		:alt: Creation Section
		:class: with-shadow float-right
		:width: 150px

#. In the **Creation Section** you will find all the commands that create new cards or tubes, modify existing curves, add cards between other cards, convert edges of poly objects to curves and advanced geometry and curves binding function - Warp.
	
	a. Switch buttons **"Extrude and Warp"** will switch between two curve modes. Extrude is the basic geometry creation that existed before v1.1 and Warp is the new, advanced, algorithm that adds a lot of new controls to created curves.

	#. **New Card** or **New Tube** will create a default card or tube in the center of the world.

	#. **Curve Card** or **Curve Tube** will convert any Maya CV or Bezier curve to fully functional Curve Card or Tube

	#. **Add Cards** and **Add Tubes** will create new Cards or Tubes between selected Curve Cards or Curve Tubes. The number of created curves is controlled by **Add** slider

	#. Edge to Curve will convert any selected edge groups to CV curves.

	#. Warp button allows for advanced binding of geometry and curves to other curves. More details in the Warp section.

	.. figure:: https://i.imgur.com/IA6fg8L.png
		:alt: Layer Section
		:class: with-shadow float-right
		:width: 150px

#. **Layer Section** consists of four filters, 20 curve layers and geometry extraction buttons:

	a. **Filters** allow you to quickly show/hide all curve cards, show only curves, show only geometry and enable geometry colorization mode.

	#. **20 layers** switch buttons allow for advanced and intuitive organization of curve cards. New curves are placed in the selected layer. Using Marking Menu (Hold RMB) you can transfer curves between layers, hide individual layers, change selectability of geometry and more.

	#. **Extract Selected** will extract geometry from selected curves. **Extract All** will extract geometry from all layers.

	.. figure:: https://i.imgur.com/pZ5X8IH.png
		:alt: Selection and Transfer Section
		:class: with-shadow float-right
		:width: 150px

#. **Selection and Transfer Section** adds additional useful functions to control Curve Cards/Tubes attributes and grouping.

	a. **Select Curve**, **Select Geo**, **Select Group** will select the appropriate Curve Card component.

	#. **Group Curves** button and field allows for quick grouping of selected curves in the Outliner.

	#. **Select CVs Slider** will quickly select CVs based on the slider position. Select curves and drag the slider.
	
	#. **Transfer Attr** and **Transfer UVs** button will transfer appropriate attributes (settings) from one curve selected curve to all other in selection list.
	
	#. **Reset Pivot** will reset the manipulator pivot to the first CV of the curve.
	
	.. figure:: https://i.imgur.com/gG0L4Co.png
		:alt: Utility Section
		:class: with-shadow float-right
		:width: 150px

#. **Utility Section** holds advanced functions that change the curve density, length, smoothness and more:

	a. **Rebuild Curve Slider** will interactively rebuild selected curves (change the number of CVs).

	#. **Duplicate** button is probably the most important function for quick duplication of already existing Curve Cards and Tubes. Simply select any number of curves and click duplicate.
	
	#. **Extend** and **Reduce** will lengthen or shorten the selected curves based on the Factor Slider.

	#. **Smooth** will Smooth selected curves or selected CVs based on the Factor slider.

	#. **Curve Control** and **Apply** buttons create a deformer curve that can deform selected curves. So apply the deformer, simply select it and click Apply.

	#. **Curve Control Window** Will open a separate menu that holds sliders and graphs that control curve attributes and UVs.

Curve Control Window
^^^^^^^^^^^^^^^^^^^^

.. figure:: https://i.imgur.com/o39URwW.png
	:alt: Utility Section
	:class: with-shadow float-right
	:width: 250px

Curve Control Window holds all the sliders and checkboxes that control the attributes of any selected curves. Window is dockable to any part of Maya UI. It is multi-selection capable and have 4 main sections:

#. At the top there are controls for **Curve Layer**, **Geometry Color** in Colorization mode, **Curve Name** and **Curve Thickness**.

#. **Main Attributes Section** holds all the main sliders and graphs for curve control.

#. **UV's Section** holds sliders for procedural UVs editing.

#. **Solidify Section** holds sliders and checkbox to enable solidify (extrusion) of selected curves

**Reset Sliders Range** will reset sliders minimum and maximum values to preset default values.

.. note:: You can always extend the range of the sliders by manually typing values into a value field.

|
|
|
|
|
|

Structure of the Curve Card/Tube Object
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. figure:: https://i.imgur.com/ZsRo4v2.png
	:alt: Utility Section
	:class: with-shadow float-right
	:width: 200px

Curve Cards and Tubes are complex objects and thus they consist of multiple simple objects grouped together.

**curveCard** is the main group that holds all the elements of the Curve Cards and Tubes. This top level group can be moved, grouped and renamed.

The main object that you will interact with is **pathCurve** object. It is the only viewport selectable object by default. It is a control curve that deform the geometry based on its shape. This curve holds all the attributes and has no construction history which allows you to use default Maya Deformers, curve functions and other curve related options from Maya without loosing the functionality of the Curve Card group. pathCurve should not be renamed or moved outside the main group.

**instances** sub-group is a construction group and should be ignored by the user. It holds only functional elements that should not be moved to other groups or renamed.

**geoCard** is the actual geometry that is controlled by the **pathCurve**. The only way to interact with it is to enable "Geometry Edit" in the layer.

.. warning:: You should not remove or rename any objects inside the main group. If you want to organize your scene - use layers or/and rename and group the main group itself but not its contents.

.. note:: **Warp** function will sometimes create additional sub-group called **origCurves** that should not be moved or renamed by the user.

