.. currentmodule:: index

############
Installation
############

Initialization
--------------

.. warning:: Only **Windows** platform is fully supported. **OSX** platform is not tested and not supported. It might work just fine, or it might not.

#. Unpack and copy **gs_curvetools** folder to **Documents/Maya/{Maya_Version}/scripts/**

    .. figure:: https://i.imgur.com/aLTGOqy.png
        :alt: Folder Structure Example
        :class: with-shadow
        :width: 600px
        :align: center

        Folder structure example

#. Run **Maya**

#. Copy and Paste this code to **Python Command Field**:

    .. code-block:: python

        import gs_curvetools.init as ct_init;reload(ct_init);ct_init.Init();

#. Press **Enter**. Installation is complete.

Main Menu, Resetting and Stopping
---------------------------------

.. figure:: https://i.imgur.com/ewMSuiz.png
    :alt: Maya Shelf
    :class: with-shadow float-right
    :width: 200px

After Initialization_ step **GS** tab will appear on **Maya Shelf**.

.. figure:: https://i.imgur.com/mefmQ38.png
    :alt: Main Menu
    :class: with-shadow float-left
    :width: 50px

CT UI button will open/close GS CurveTools User Interface.

.. figure:: https://i.imgur.com/a9MMBFc.png
    :alt: Main Menu
    :class: with-shadow float-left
    :width: 50px

CT Reset will reset GS CurveTools to its default state.

.. figure:: https://i.imgur.com/QIoIcVU.png
    :alt: Main Menu
    :class: with-shadow float-left
    :width: 50px

CT Del will close GS CurveTools UI and stop any background scripts.

.. note:: You can use middle mouse drag to drag these buttons to any tab on the shelf.

Hotkeys
-------

After you Initialize_ the plug-in all the hotkeys will be available in::


    Hotkey Editor -> Custom Scripts -> GS -> GS_CurveTools

.. _Initialize: Initialization__

Updating the Plug-in
--------------------

To update the plug-in to a new version just **delete** the old **gs_curvetools** folder and repeat the Initialization_ steps.







