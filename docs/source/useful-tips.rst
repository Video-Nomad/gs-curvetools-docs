.. currentmodule:: <index>

###########
Useful Tips
###########

Better Curve Visibility In The Viewport
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

It can be tricky sometimes to see curves using default Maya settings, especially when you have a lot of them with applied textures.

There are a few simple steps you can take to fix this problem:

Screen-space AO Trick:
######################

First you can enable Screen-space Ambient Occlusion but without any actual occlusion happening. Maya 2017-2020 viewport will increase the visibility of the curves if you have Ambient Occlusion enabled.

.. figure:: https://i.imgur.com/yLFF7GW.gif
    :alt: Maya Shelf
    :class: with-shadow 
    :width: 300px
    :align: center

- To avoid any unwanted visual effects from AO, go to Renderer -> Viewport 2.0 (options box) -> Screen-space Ambient Occlusion and change the settings as showed on the screenshot:

.. figure:: https://i.imgur.com/P1xdKis.png
    :alt: Maya Shelf
    :class: with-shadow
    :width: 300px
    :align: center

- Now you only need to add a hotkey to quickly switch between two modes:

    - Go to Windows -> Settings/Preferences -> Hotkey Editor -> Runtime Command Editor -> New
    - Copy and Paste this code to the Python command field:

        .. code-block:: python
        
            import maya.cmds as mc

            if(mc.getAttr('hardwareRenderingGlobals.ssaoEnable')):
                mc.setAttr('hardwareRenderingGlobals.ssaoEnable', 0)
            else:
                mc.setAttr('hardwareRenderingGlobals.ssaoEnable', 1)

        .. note:: It might look something like this when you paste it, don't worry it's a visual bug in Maya. Just leave it as is:

            .. figure:: https://i.imgur.com/d75eZzW.png
                :alt: Maya Shelf
                :class: with-shadow
                :width: 400px
                :align: center

    - Name your Runtime Command to something like "MY_AOToggle"
    - Add a Description
    - Click "Save Runtime Command"
    - Assign a new Hotkey to your custom command in the Hotkey Editor under the Custom Scripts drop down menu.

    - You should get something like this in the end:

    .. figure:: https://i.imgur.com/Bbhb1IS.png
                    :alt: Maya Shelf
                    :class: with-shadow
                    :width: 400px
                    :align: center

- Now by clicking on your custom hotkey, you will toggle between two visibility modes.

Curve thickness
###############

Next trick is to increase the thickness of the curve. To do that, simply select all the curves you want to change and using Curve Control Window and increase the thickness of the curves (default value is -1):

.. figure:: https://i.imgur.com/34Foacd.gif
                :alt: Maya Shelf
                :class: with-shadow
                :width: 400px
                :align: center