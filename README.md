# Hamburger icon Animation 4
See the Animation => [ham_4](https://youtu.be/1G-zUr4SZkY) 
## How to use
Threee steps to use it

1. Add this in the head tag
```
<link href="https://devhassan2001.github.io/Ham_Animation_4/ham_4.css" rel="stylesheet">
```

2. Add this to the end of the body tag
```
<script src="https://devhassan2001.github.io/Ham_Animation_4/ham_4.js"></script>
```

3. Add this to the place you want to set the hamburger icon
```
    <div class="ham_Container">
        <div class="circle"></div>
        <div 
        id="ham_4" 
        data-bars_thickness="3.7"
        data-speed="0.5"
        data-middle_bar_color="#000000"
        data-top_down_bars_color="#000000"
        ></div>
        <div class="hide" data-background_color="#ffffff"></div>
    </div>
```

## Default data
in the third step, the data attributes represent the default data for the animation

Data Name | Description | Defualt value
--------- | ----------- | -------------
data-bars_thickness | set the thickness of the bars | 3.7 (means 3.7px)
data-speed | set the time of the animation | 0.5 (means 0.5s)
data-middle_bar_color | set the middle bar color | #000000 (must be a hex value)
data-top_down_bars_color | set the top and down bars color | #000000 (must be a hex value)
data-background_color | set the background color of the hide element to the background of your navbar | #ffffff (must be a hex value)

## Available sizes
(36.5x34) 
