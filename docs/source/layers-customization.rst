.. currentmodule:: <index>

.. _layer-customization:

######################
Colors and Layer Names
######################

.. _color-mode:

Color Mode
^^^^^^^^^^

.. image:: images/buttons/color.png
  :align: right
  :width: 100px

**Color** - this toggle will activate a special **Color Mode**. In this mode all the **Geometry** will be colored based on the **Layer** color.

You can continue creating hair using this mode exclusively (it is compatible with most commands) or switch to it occasionally to check curve intersections etc.

**Layer** color is assigned randomly at first, but you can always manually change it using `Curve Control Window <attributes.html>`_ and clicking the color box at the top of the window or by clicking on **Layer Names & Colors Window** and opening :ref:`Layer Customization Window<layer-customization-window>`.

Color is **Layer** based. Each layer can have its own color.

Clicking on **Color** button again will restore the original materials of the geometry.

There are four options available for the color mode:

- **Color + Alpha Map** (:numref:`color_with_alpha`) - this default mode will colorize the geometry based on the layer color but keep the Alpha map transparency.
- **Color + Alpha Map + Checker** (:numref:`color_with_alpha_and_checker`) - the same as the first one but with UV checker texture overlayed on top.
- **Color** (:numref:`color_mode`) - this mode can be activated in the Options menu and it will only show colors for each individual **Layer**. This mode is useful if you want to quickly check which **Curve** is assigned to which **Layer**. Open the options menu and uncheck the **Checker Pattern for Color mode**
- **Color + Checker** (:numref:`color_mode_checker`) - this mode will colorize the geometry and also show UV checker map. This is useful to quickly check your **UVs** and which **Curve** is assigned to which **Layer**.

.. image:: images/color_options.png
  :width: 200px
  :align: right

You can change between the color modes using :ref:`Options<options>` ⇨ Color Options menu

|

.. list-table:: **Color Modes:**

  * - .. figure:: images/color_mode_demo.png
        :target: _images/color_mode_demo.png
        :name: color_with_alpha
        :align: center

        Color with Alpha

    - .. figure:: images/color_mode_checker_demo.png
        :target: _images/color_mode_checker_demo.png
        :name: color_with_alpha_and_checker
        :align: center

        Color with Alpha and Checker

  * - .. figure:: images/color_mode_demo_no_alpha.png
        :target: _images/color_mode_demo_no_alpha.png
        :name: color_mode
        :align: center

        Color Only

    - .. figure:: images/color_mode_demo_no_alpha_checker.png
        :target: _images/color_mode_demo_no_alpha_checker.png
        :name: color_mode_checker
        :align: center

        Color with Checker


.. _color-marking-menu:

Color Marking Menu
^^^^^^^^^^^^^^^^^^

.. image:: images/colors_marking_menu.png
  :align: right
  :width: 400px

By holding RMB on Colors Filter you will open the Color mode marking menu.

- Randomize Colors will randomize Layer colors when clicked. The default values for randomization is Saturation range from 0.5 to 1.0, Hue 0.0 to 1.0 and Value from 0.3 to 0.7
- Apply Curve Colors will sync the curve color in each layer to the color of that layer.
- Reset Curve Colors will reset the colors of the curves to their default Maya color.
- Custom Colors Window will open a window where the user can customize Layers color, save a preset and generate new colors.

.. _layer-customization-window:

Layers Customization Window
^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. image:: images/layer_customization_window.png
  :align: right
  :width: 200px

**Layers Customization Window** holds all the controls for the color and name management of the Layers.

**Gradient** section is used to generate a linear gradient from the two colors selected and the amount of rows to generate the gradient to.

**Randomize** section will randomize the colors in every layer based on saturation minimum and maximum values. Value is fixed to a range of 0.3-0.7

**0-79 Layer Color Pickers and Name Fields** allow to set any custom color and name to every layer separately by clicking on the color picker or typing in the field, randomizing this single layer color (Rand) or resetting the color and name of the layer by clicking on Reset button.

**Reset All** button will reset all the layers to the default value.

**Get From Scene** will load the colors and names from the scene layers to the window fields and color pickers.

**Set To Scene** will apply the selected colors and names to the layers in the current scene.

**Load Preset** will load a global preset colors and names.

**Save As Preset** will save current colors and names to a global preset that can be then loaded to any scene.

Syncing Curve Color to Layer Color
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. image:: images/color_options.png
  :align: right
  :width: 200px

You can synchronize the colors of the curve to the colors of the layers by clicking on the Apply Curve Colors button in the :ref:`Color Marking Menu<color-marking-menu>`, or by selecting "Sync Curve Color to Layer Color" option in the :ref:`options menu<options>`. 

Colorizing Regrouped Layers
^^^^^^^^^^^^^^^^^^^^^^^^^^^

.. image:: images/colorized_regrouped_layers.png
  :align: right
  :width: 150px

You can choose to apply the colors to the Regrouped layers in the outliner (using :ref:`Regroup By Layer <regroup-by-layer>` button) automatically, based on the Layer color, by selecting the option "Colorize Regrouped Layers" in the options menu.

Regrouping the layers with this option enabled will colorize the groups in the outliner.
