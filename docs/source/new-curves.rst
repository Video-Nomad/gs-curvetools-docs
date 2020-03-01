.. currentmodule:: index

#############
Main Concepts
#############

Intro
-----

GS CurveTools main function is to create and manipulate geometry that is bound to a curve.

This is useful in many ways. You can create hair cards for games. Belts and straps for characters. Tubes, pipes and cables for environments and much more.

GS CurveTools also allows for an advanced geometry manipulation, for example complex braided cables, hair braids, clusters of hair cards all controlled by a single curve in a natural way.

In this chapter we will go through main concepts of the plug-in and after that we will dive deeper into advanced functions.


Main Menu
---------

.. figure:: https://i.imgur.com/Srb9UYX.png
    :alt: Right floating image
    :class: with-shadow float-right
    :width: 150px

Main Menu is a simple window that can be docked to any place within Maya main window

It is split into 5 sections:


#. On the top of the menu is **Opions, Help and About** drop down menus:

	#. **Options** menu holds various tweaks that you can use to alter functionality of the plug-in

	#. **Help** menu holds main links to documentation as well as contacts and social media links of the author

	#. **About** menu holds information about the version of the plug-in and licensing details

#. In the **Creation Section** you will find all the commands that create new cards or tubes, modify existing curves, add cards between other cards, convert edges of poly objects to curves and advanced function, "Warp"
	
	#. Switch buttons **"Extrude and Warp"** will switch between two curve modes. Extrude is the basic geometry creation that existed before v1.1 and Warp is the new, advanced, algorithm that adds a lot of new controlls to created curves.

	#. **New Card** or **New Tube** will create a default card or tube in the center of the world.

	#. **Curve Card** or **Curve Tube** will convert any Maya CV or Bezier curve to fully functional Curve Card or Tube

	#. **Add Cards** and **Add Tubes** will create new Cards or Tubes between selected Curve Cards or Curve Tubes. The number of created curves is controlled by **Add** slider

	#. Edge to Curve will convert any selected


