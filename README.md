## URL
WebsiteUrlWillBeHere

## My approach

1. I wanted to simulate a "thinking" phase like the chatbots available on the internet. The bot has a 3-second gap before sending a response. Icons with a background are functional — they are disabled when the user hasn't typed anything yet or the bot itself is thinking. The bot also tries to match the user's question against its 20 predefined responses in `mocks/ChatBotResponses`. If it succeeds, it returns the matched response, otherwise it sends a random one.

2. I split the app into two views — `Chat`, where the whole messaging happens, and `ChatPreview`, where the user can select one of three predefined questions.

3. I used a `cn` merge utility (clsx + tailwind-merge) for Tailwind because sometimes the bracket notation can break layout and override valid changes.

4. I manipulated Tailwind styles to be able to change CSS colors in one `index.css` for light and dark themes — there is a possibility to add more styles since we only need a few color variables to extend it.

5. I broke down components following atomic design (atoms, molecules, and organisms) because it is my go-to and also a clean approach — you can find it in a few of my other projects as well.

6. I used Lucide icons because in the Figma design I noticed they were used.

7. I also blocked starting a new chat when there are no messages, to prevent the user from clearing an already empty conversation.

8. In Figma I couldn't get the colors for the dark theme so I just swapped two — background and foreground — and changed surface for a lighter color.

9. Unfornetely i dont know how to do this shape of the div in the right corner - i found only this article: https://css-tricks.com/almanac/properties/c/corner-shape/ and went to MDN docs. Then i used the corner-shape: scoop instead :/. But it does not work in every browser.
