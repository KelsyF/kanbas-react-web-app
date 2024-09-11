export default function Lab1() {
    return (
        <div id="wd-lab1">
            <h2>Lab 1</h2>
            <h3>HTML Examples</h3>
            <div id="wd-h-tag">
                <h4>Heading Tags</h4>
                Text documents are often broken up into several sections and subsections. Each section is usually
                prefaced with a short title or heading that attempts to summarize the topic of the section it precedes.
                For instance this paragraph is preceded by the heading Heading Tags. The font of the section headings
                are usually larger and bolder than their subsection headings. This document uses headings to introduce topics
                such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text
                so that it renders in a browser as large headings. There are 6 heading tags for different sizes: h1, h2,
                h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest heading.
            </div>
            <div id="wd-p-tag">
                <h4>Paragraph Tag</h4>
                <p id="wd-p-1">
                    This is a paragraph. We often separate a long set of sentences with vertical spaces to make the text
                    easier to read. Browsers ignore vertical white spaces and render all the text as one single set of
                    sentences. To force the browser to add vertical spacing, wrap the paragraphs you want to separate
                    with the paragraph tag.
                </p>
                <p id="wd-p-2">
                This is the first paragraph. The paragraph tag is used to format vertical gaps between long pieces of text
                like this one.
                </p>
                <p id="wd-p-3">
                This is the second paragraph. Even though there is a deliberate white gap between the paragraph above and
                this paragraph, by default browsers render them as one contiguous piece of text as shown here on the right.
                </p>
                <p id="wd-p-4">
                This is the third paragraph. Wrap each paragraph with the paragraph tag to tell browsers to render the gaps.
                </p>
            </div>
            <div id="wd-lists">
                <h4>List Tags</h4>
                <h5>Ordered List Tag</h5>
                How to make pancakes:
                <ol id="wd-pancakes">
                    <li>Mix dry ingredients.</li>
                    <li>Add wet ingredients.</li>
                    <li>Stir to combine.</li>
                    <li>Heat a skillet or griddle.</li>
                    <li>Pour batter onto the skillet.</li>
                    <li>Cook until bubbly on top.</li>
                    <li>Flip and cook the other side.</li>
                    <li>Serve and enjoy!</li>
                </ol>
                My favorite recipe - Crepes, the German way!:
                <ol id="wd-your-favorite-recipe">
                    <li>Mix dry ingredients together in a large bowl.</li>
                    <li>Add in vanilla and eggs, but do not mix until you add the milk!</li>
                    <li>Add vegetable oil.</li>
                    <li>Add milk.</li>
                    <li>Beat (whisk) until all of the lumps are gone. You want a pretty thin consistency.</li>
                    <li>Let the batter sit about 10 to 15 minutes.</li>
                    <li>Add butter to your pan on medium heat.</li>
                    <li>Ladle out a cup (or more) until crepe is almost to edges of your medium sized pan</li>
                    <li>Wait until the crepe is dull. Try to swish the crepe, if you can, leave for a bit longer to brown and crater.</li>
                    <li>FLIP!!</li>
                    <li>Cook until done.</li>
                    <li>Repeat steps 8 to 11, adding butter again to the pan when needed, until you're out of batter.</li>
                    <li>Enjoy! :)</li>
                </ol>
                <h5>Unordered List Tag</h5>
                My favorite books (in no particular order):
                <ul id="wd-my-books">
                    <li>Dune</li>
                    <li>Lord of the Rings</li>
                    <li>Ender's Game</li>
                    <li>Red Mars</li>
                    <li>The Forever War</li>
                </ul>
                Your favorite books (in no particular order):
                <ul id="wd-your-books">
                    <li>The Cruel Prince (The Folk of the Air series)</li>
                    <li>A Court of Thorns and Roses (the series)</li>
                    <li>The Host</li>
                    <li>One Dark Window</li>
                    <li>Villains are Destined to Die</li>
                </ul>
            </div>
            <div id="wd-tables">
                <h4>Table Tag</h4>
                <table border={1} width="100%">
                    <thead>
                        <tr>
                            <th>Quiz</th>
                            <th>Topic</th>
                            <th>Date</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Q1</td>
                            <td>HTML</td>
                            <td>2/3/21</td>
                            <td>85</td>
                        </tr>
                        <tr>
                            <td>Q2</td>
                            <td>CSS</td>
                            <td>2/10/21</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q3</td>
                            <td>JavaScript</td>
                            <td>2/17/21</td>
                            <td>95</td>
                        </tr>
                        <tr>
                            <td>Q4</td>
                            <td>React.js</td>
                            <td>10/11/24</td>
                            <td>98</td>
                        </tr>
                        <tr>
                            <td>Q5</td>
                            <td>Hooks and Redux</td>
                            <td>10/8/24</td>
                            <td>85</td>
                        </tr>
                        <tr>
                            <td>Q6</td>
                            <td>Node</td>
                            <td>11/1/24</td>
                            <td>80</td>
                        </tr>
                        <tr>
                            <td>Q7</td>
                            <td>Server and UA</td>
                            <td>11/8/24</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q8</td>
                            <td>Mongo DB</td>
                            <td>11/15/24</td>
                            <td>84</td>
                        </tr>
                        <tr>
                            <td>Q9</td>
                            <td>DB Relation</td>
                            <td>11/22/24</td>
                            <td>92</td>
                        </tr>
                        <tr>
                            <td>Q10</td>
                            <td>APIs</td>
                            <td>12/6/24</td>
                            <td>86</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>Average</td>
                            <td>88.5</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div id="wd-images">
                <h4>Image Tag</h4>
                Loading an image from the internet:
                <br />
                <img id="wd-starship"
                     width="400px"
                     src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
                     alt="web1_Starship-gap23.jpg"
                />
                <br />
                Loading a local image:
                <br />
                <img id="wd-teslabot"
                     height="200px"
                     src="images/teslabot.jpg"
                     alt="teslabot.jpg"
                />
            </div>
            <div id="wd-forms">
                <h4>Form Elements</h4>
                <form id="wd-text-fields">
                    <h5>Text Fields</h5>
                    <label htmlFor="wd-text-fields-username">Username: </label>
                    <input id="wd-text-fields-username" placeholder="jdoe" /> <br />

                    <label htmlFor="wd-text-fileds-password">Password: </label>
                    <input type="password" id="wd-text-fields-password" value="123@#$asd" /> <br />

                    <label htmlFor="wd-text-fields-first-name">First name: </label>
                    <input type="text" id="wd-text-fields-first-name" title="John" /> <br />

                    <label htmlFor="wd-text-fields-last-name">Last name: </label>
                    <input type="text" id="wd-text-fields-last-name" placeholder="Doe"
                            value="Wonderland" title="The last name" />

                    <h5>Text Boxes</h5>
                    <label>Biography: </label>
                    <br />
                    <textarea id="wd-textarea" cols={30} rows={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>

                    <h5 id="wd-buttons">Buttons</h5>
                    <button id="wd-all-good" onClick={() => alert("Life is Good!")} type="button">
                        Hello World!
                    </button>

                    <h5>File Upload</h5>
                    <input id="wd-upload" type="file" />

                    <h5 id="wd-radio-buttons">Radio Buttons</h5>
                    <label>Favorite movie genre: </label>
                    <br />

                    <input type="radio" name="radio-genre" id="wd-radio-comedy"/>
                    <label htmlFor="wd-radio-comedy">Comedy</label>
                    <br />

                    <input type="radio" name="radio-genre" id="wd-radio-drama"/>
                    <label htmlFor="wd-radio-drama">Drama</label>
                    <br />

                    <input type="radio" name="radio-genre" id="wd-radio-scifi"/>
                    <label htmlFor="wd-radio-scifi">Science Fiction</label>
                    <br />

                    <input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
                    <label htmlFor="wd-radio-fantasy">Fantasy</label>

                    <h5 id="wd-checkboxes">Checkboxes</h5>
                    <label>Favorite Movie Genre: </label>
                    <br />

                    <input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
                    <label htmlFor="wd-chkbox-comedy">Comedy</label>
                    <br/>

                    <input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
                    <label htmlFor="wd-chkbox-drama">drama</label>
                    <br/>

                    <input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
                    <label htmlFor="wd-chkbox-scifi">Science Fiction</label>
                    <br/>

                    <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
                    <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
                    <br/>

                    <h4 id="wd-dropdowns">Dropdowns</h4>

                    <h5>Select One</h5>
                    <label htmlFor="wd-select-one-genre"> Favorite Movie Genre: </label>
                    <br />
                    <select id="wd-select-one-genre">
                        <option value="COMEDY">Comedy</option>
                        <option value="DRAMA">Drama</option>
                        <option selected value="SCIFI">Science Fiction</option>
                        <option value="FANTASY">Fantasy</option>
                    </select>

                    <h5>Select Many</h5>
                    <label htmlFor="wd-select-many-genre">Favorite Movie Genres: </label>
                    <br />
                    <select id="wd-select-many-genre" multiple>
                        <option selected value="COMEDY">Comedy</option>
                        <option value="DRAMA">Drama</option>
                        <option selected value="SCIFI">Science Fiction</option>
                        <option value="FANTASY">Fantasy</option>
                    </select>

                    <h4>Other HTML Field Types</h4>

                    <label htmlFor="wd-text-fields-email"> Email: </label>
                    <input type="email"
                           placeholder="jdoe@somewhere.com"
                           id="wd-text-fields-email"/>
                    <br />

                    <label htmlFor="wd-text-fields-salary-start"> Starting Salary: </label>
                    <input type="number"
                           id="wd-text-fields-salary-start"
                           placeholder="1000"
                           value="100000"/>
                    <br />

                    <label htmlFor="wd-text-fields-rating"> Rating: </label>
                    <input type="range" id="wd-text-fields-rating"
                           placeholder="4"
                           max="5"
                           //value="4"
                    />
                    <br />

                    <label htmlFor="wd-text-fields-dob"> Date of Birth: </label>
                    <input type="date"
                           id="wd-text-fields-dob"
                           value="200-01-21"/>
                    <br />
                </form>

                <h4>Anchor Tag</h4>

                Please <a id="wd-lipsum" href="https://www.lipsum.com">click here</a> to get dummy text.
                <br />

                Pleas <a id="wd-lipsum" href="">click here</a> to navigate to the code repo on GitHub.

            </div>
        </div>
    );
}