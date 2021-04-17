# [The Odin Project: Javascript] - Project: Shopping Cart

## Intro

-   This project was aimed as an introduction to React Router. I was familiar and have used Router in previous projects, so I decided to use Gatsby since I am still trying to learn this framework. Along the way I got learn a lot more. I am really proud of this project

-   I borrowed images to make the website look like a real clothing store! I got the images from:

    -   Photo by <a href="https://unsplash.com/@_thedl?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">David Lezcano</a> on <a href="https://unsplash.com/s/photos/men-fashion?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    -   Photo by <a href="https://unsplash.com/@contentpixie?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Content Pixie</a> on <a href="https://unsplash.com/s/photos/women-fashion?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    -   Photo by <a href="https://unsplash.com/@hengfilms?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Heng Films</a> on <a href="https://unsplash.com/s/photos/men-fashion?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    -   Photo by <a href="https://unsplash.com/@brookecagle?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brooke Cagle</a> on <a href="https://unsplash.com/s/photos/men-fashion?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
    -   [Pacsun](https://www.pacsun.com/)

-   You can find more on the project here: [The Odin Project - Shopping Cart](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/shopping-cart)

### 📗 Fonts used

-   [Secular One](<[https://fonts.google.com/specimen/Secular+One?preview.text_type=custom&category=Sans+Serif&preview.size=59&thickness=6](https://fonts.google.com/specimen/Secular+One?preview.text_type=custom&category=Sans+Serif&preview.size=59&thickness=6)>)
-   [Lato](<[https://fonts.google.com/specimen/Lato?preview.text=This sweatshirt offering&preview.text_type=custom&category=Sans+Serif&preview.size=59&thickness=6)>)

### 🎨 Color Reference

|  Color               |  Hex                                                                 |
| -------------------- | -------------------------------------------------------------------- |
|  Brown               |  ![#f6ecea](https://via.placeholder.com/10/f6ecea?text=+) `#f6ecea`  |
|  Black               |  ![#212122](https://via.placeholder.com/10/212122?text=+) `#212122`  |
|  Medium Brown        |  ![#be8643](https://via.placeholder.com/10/be8643?text=+) `#be8643`  |
|  Medium Brown Hover  |  ![#9a6e38](https://via.placeholder.com/10/9a6e38?text=+) `#9a6e38`  |
|  Card Hover          |  ![#ac401f](https://via.placeholder.com/10/ac401f?text=+) `#ac401f`  |

<br>

## Overall

-   I continued to use Gatsby to be more familiar with it. This project allowed me to practice more Gatsby functionality since I was using the pages directory and redirecting users to the pages
-   For my next project,
    -   I want to practice using CSS grid since I heard it can be a great alternative to CSS flexbox
    -   Instead of using React-Bootstrap I am going to see if I can just use Material UI. In this project, I used it to get the icons in the footer

<br>

## Design

-   Learned how to use tools like [Pixlr](<[https://pixlr.com/x/](https://pixlr.com/x/)>) and [Image Color Picker](<[https://imagecolorpicker.com/en](https://imagecolorpicker.com/en)>)
-   Pixlr allowed me to edit images. I was able to create the jumbotron background image thanks to this tool
-   Image Color Picker allowed me to go to any picture on the internet and look at the hex colors they used. Really useful when looking at designs for inpirations
-   Design Inspiration Came From [Lorada | Minimalist Fashion Store Redesign](<[https://dribbble.com/shots/11206598-Lorada-Minimalist-Fashion-Store-Redesign/attachments/2812420?mode=media](https://dribbble.com/shots/11206598-Lorada-Minimalist-Fashion-Store-Redesign/attachments/2812420?mode=media)>)

<br>

## Styling

1. I learned to create global classes with styling such as text-align: center. Use this for cases where you need to apply that CSS but it is specific to only that HTML element
    1. It is still useful to create a class that will apply that styling to all elements since it will be a lot of work to place that class on every html element that needs it
2. Also one thing that I am going to start doing is to used the Row or Col as the overall container for content and any content inside of it will go inside another div. Leave the Row and Col alone since they already have their own css. Example:

```jsx
<Row>
	<Col>
		<div className='exampleContainer>
			<p>...</p>
			<p>...</p>
			<p>...</p>
		</div>
	</Col>
</Row>

// Row and Col already have their own styling. I will rather keep Row and Col clean and
// apply the css I want to the exampleContainer
```

<br>

## Development

-   Learned how to use inline style to place a background image on a component! Really helped as I was having trouble figuring out how to place a background image in the scss file
-   Learned how to create dynamic routing using Gatsby! This articles really helped:
    -   [https://medium.com/@ghoshanimesh/dynamic-routing-in-gatsby-b6ada258f6c2](https://medium.com/@ghoshanimesh/dynamic-routing-in-gatsby-b6ada258f6c2)
    -   [https://www.qed42.com/blog/dynamic-routing-gatsby](https://www.qed42.com/blog/dynamic-routing-gatsby)
-   Learned how to use the pages directory to create the routes I want to link users to
-   Learned how to add state to a link that a user clicks on! Really helped when clicking on the different categories for shop
-   Learned how to set up Redux in a gatsby Application
    -   These tutorials helped out
        -   [How to get started with Gatsby 2 and Redux](<[https://www.freecodecamp.org/news/how-to-get-started-with-gatsby-2-and-redux-ae1c543571ca/](https://www.freecodecamp.org/news/how-to-get-started-with-gatsby-2-and-redux-ae1c543571ca/)>)
        -   [Setting up Redux with GatsbyJS V2](<[https://www.edwardbeazer.com/setting-up-redux-with-gatsbyjs-v2/](https://www.edwardbeazer.com/setting-up-redux-with-gatsbyjs-v2/)>)
    -   I noticed that when using Redux Dev Tools, my store was not appearing. For it to appear, I need to include. More here: [https://extension.remotedev.io/#usage](https://extension.remotedev.io/#usage)

```jsx
window.**REDUX_DEVTOOLS_EXTENSION** && window.**REDUX_DEVTOOLS_EXTENSION**()
```

-   Learned how to format numbers using Intl.NumberFormat. Resources to help me
    -   [How to Format Currency in ES6](<[https://www.samanthaming.com/tidbits/30-how-to-format-currency-in-es6/](https://www.samanthaming.com/tidbits/30-how-to-format-currency-in-es6/)>)
-   Learned how to use the array.splice(index, 1) → index represent the index of the element, the 1 represents how many elements to remove. Note that splice modifies the array in place and returns a new array containing the elements that have been removed.
-   Learned how to create a reducer that adds elements to an array and deletes them

    -   Really like the simplicity of the code. Easy to understand

    ```jsx
    case shoppingCartTypes.SAVE_CART_ITEM:
    state.cartItems.push(action.payload.cartItem);

    return {
    	...state,
    	cartItems: state.cartItems
    };

    case shoppingCartTypes.DELETE_CART_ITEM:
    	state.cartItems.splice(action.payload.index, 1);

    	return {
    		...state,
    		cartItems: state.cartItems
    };
    ```

<br>

## Technologies:

-   React
-   React Bootstrap
-   Material UI for Icons
-   Dribble
-   Sass
-   Surge.sh
-   Gatsby
