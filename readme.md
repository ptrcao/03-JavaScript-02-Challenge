# Readme

> URL for password generator: <a href="https://ptrcao.github.io/03-JavaScript-02-Challenge/">https://ptrcao.github.io/03-JavaScript-02-Challenge/</a>

> URL to repository: <a href="https://github.com/ptrcao/03-JavaScript-02-Challenge.git">https://github.com/ptrcao/03-JavaScript-02-Challenge.git</a>

<p>Included by the developer in this repository is a fully functional, Javascript-driven password generator.  It makes handy use of a html input field of <code>type="number"</code> to exclude irrelevant/invalid non-numerical/non-integer inputs for the password length.  The inclusion of <code>min</code> and <code>max</code> input attributes adds additional validation robustness when the user uses the default up and down arrows which appear on hover over the input element.  For validation, the password length value is compared against an array of acceptable inputs and a prompt to re-try is triggered when the user input cannot be matched against the validation array.</p>

<p>Secondly, the UI choice of a checkbox list for character types was chosen to avoid tiring the user with repeated windows prompts.  When at least one choice has not been made, a prompt to re-try is triggered.  Furthermore, it will be noted that the password generation .js code begins by randomly selecting one character from each character type set, before randomly choosing character types for the remaining password letters, thus satisfying the client requirement to select at least one character from each character type.</p>

## Screenshot
<img src="screenshot_password_generator.png" alt="Screenshot of password generator">