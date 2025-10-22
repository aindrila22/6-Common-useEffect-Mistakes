# YouTube Video Script: 6 Common useEffect Mistakes Every React Developer Makes

**Duration:** 12 minutes  
**Format:** Voiceover + Screen Recording (No Face Cam)  
**Target Audience:** React developers (beginner to intermediate)  
**Tone:** Friendly, educational, practical

---

## [00:00 - 00:45] INTRO & HOOK

**[On Screen: Animated title with motion graphics - "6 useEffect Mistakes"]**
**[Background Music: Upbeat, energetic]**

Hey developers! Welcome back to Solve It Out. Today we're diving into something that trips up even experienced React developers - **useEffect mistakes**.

**[Show Code Example - Buggy Component with animated error indicators]**

If you've ever wondered why your component is re-rendering infinitely, why your API is being called 100 times, or why your cleanup functions aren't working - this video is for you.

**[On Screen: Preview of 6 mistakes as animated cards sliding in]**

We're going to cover 6 common useEffect mistakes that could be causing bugs in your React apps RIGHT NOW. And I'll show you exactly how to fix them with real, working examples.

**[Show stats/graphics: "99% of React devs make at least 1 of these"]**

But before we jump in - if you find this helpful, smash that like button and subscribe to Solve It Out for more tech tutorials. Let's get started!

---

## [00:45 - 02:15] MISTAKE #1: Missing Dependency Array

**[Transition Effect]**

**Mistake Number One: Missing Dependency Array**

**[Show Wrong Code on Screen]**

Alright, let's look at our first mistake. Check out this code:

```javascript
function App() {
  useEffect(() => {
    console.log('Component rendered!');
  }); // ❌ No dependency array
  
  return <h1>Hello World</h1>;
}
```

**[Highlight the missing bracket with red circle animation]**

See the problem? There's no dependency array at all. This means our useEffect runs on EVERY single render. Every. Single. Time.

**[Show Browser Console - Logs Flooding]**

Watch what happens in the console when I interact with this component. It's logging on every render - that's terrible for performance!

**[Show Correct Code]**

Here's the fix:

```javascript
function App() {
  useEffect(() => {
    console.log('Runs only once on mount');
  }, []); // ✅ Empty array - runs once
  
  return <h1>Hello World</h1>;
}
```

**[Split Screen - Before/After Console]**

By adding an empty dependency array, our effect now runs only once when the component mounts. That's the React equivalent of componentDidMount in class components.

**[Key Takeaway Animation]**

**Key Takeaway:** Always include a dependency array. Empty array equals runs once. No array equals runs every render.

---

## [02:15 - 03:45] MISTAKE #2: Doing Too Much in One useEffect

**[Transition Effect]**

**Mistake Number Two: Overloading Your useEffect**

**[Show Wrong Code]**

Let's look at this messy example:

```javascript
function App() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // ❌ Doing THREE different things
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
    
    console.log('Count is', count);
    document.title = `Count: ${count}`;
  }, [count]);
  
  return <div>{data}</div>;
}
```

**[Point to Code - Highlight Issues]**

This useEffect is doing THREE completely different things: fetching data, logging to console, AND updating the document title. The problem? Every time count changes, we're re-fetching the API data unnecessarily!

**[Show Network Tab - Multiple API Calls]**

Watch the network tab - see all those repeated API calls? That's wasting bandwidth and slowing down your app.

**[Show Correct Code]**

Here's how we fix it - separate your concerns:

```javascript
function App() {
  const [data, setData] = useState(null);
  const [count, setCount] = useState(0);

  // ✅ Separate effect for data fetching
  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(setData);
  }, []);

  // ✅ Separate effect for count logic
  useEffect(() => {
    console.log('Count is', count);
    document.title = `Count: ${count}`;
  }, [count]);
  
  return <div>{data}</div>;
}
```

**[Side-by-side comparison animation showing before vs after]**

Now the data fetching happens once, and the count logic runs only when count changes. Each useEffect has a single responsibility - much cleaner!

**[Key Takeaway Animation]**

**Key Takeaway:** One useEffect, one concern. Don't be afraid to use multiple useEffects.

---

## [03:45 - 05:30] MISTAKE #3: Not Cleaning Up Subscriptions

**[Transition Effect]**

**Mistake Number Three: Memory Leaks from Missing Cleanup**

**[Show Wrong Code]**

This one causes memory leaks. Check this out:

```javascript
function App() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('tick');
    }, 1000);
    // ❌ No cleanup!
  }, []);
  
  return <h1>Timer</h1>;
}
```

**[Show warning icon pulsing on screen]**
**[Background music shifts to more serious tone]**

This looks innocent, but it's a memory leak waiting to happen. When this component unmounts, that interval keeps running in the background forever.

**[Show Demo - Multiple Timers Running]**

Watch what happens when I mount and unmount this component multiple times. The console shows all those intervals are STILL running. That's eating up memory and CPU!

**[Show Correct Code]**

Here's the proper way:

```javascript
function App() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('tick');
    }, 1000);
    
    return () => clearInterval(interval); // ✅ Cleanup!
  }, []);
  
  return <h1>Timer</h1>;
}
```

**[Point to Return Statement]**

By returning a cleanup function, React calls clearInterval when the component unmounts. Problem solved!

**[Show Working Demo]**

Now when I unmount the component, the interval stops cleanly. No memory leaks!

**[Key Takeaway Animation]**

**Key Takeaway:** Always return a cleanup function for timers, intervals, subscriptions, and event listeners.

---

## [05:30 - 07:00] MISTAKE #4: Async Function Directly in useEffect

**[Transition Effect]**

**Mistake Number Four: Making useEffect Async**

**[Show Wrong Code]**

This mistake will give you a React warning. Look at this:

```javascript
function App() {
  useEffect(async () => {  // ❌ async directly
    const res = await fetch('/api/data');
    const data = await res.json();
    console.log(data);
  }, []);
}
```

**[Show Browser Console - Warning]**

See that warning in the console? "useEffect must not return anything besides a function". That's because async functions return a Promise, but React expects either undefined or a cleanup function.

**[Show animated X mark over the async keyword]**

You can't make the useEffect callback async directly. But don't worry, there's a simple pattern.

**[Show Correct Code]**

Here's how to handle async operations properly:

```javascript
function App() {
  useEffect(() => {
    // ✅ Define async function inside
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data');
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    fetchData(); // ✅ Call it
  }, []);
}
```

**[Point to Pattern]**

Define your async function INSIDE the useEffect, then call it immediately. This way, useEffect returns undefined like React expects, and you can still use async/await.

**[Show Clean Console]**

No warnings! And as a bonus, I've added error handling with try-catch.

**[Key Takeaway Animation]**

**Key Takeaway:** Never make useEffect async. Define an async function inside and call it.

---

## [07:00 - 08:30] MISTAKE #5: Creating Infinite Loops

**[Transition Effect]**

**Mistake Number Five: The Infinite Loop Trap**

**[Show Warning Screen First]**

Before I show this code, I want to warn you - DO NOT run this in production. It WILL crash your browser.

**[Show Wrong Code]**

```javascript
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1); // ❌ Updating state...
  }, [count]); // ❌ ...that's in the dependency array

  return <h1>{count}</h1>;
}
```

**[Animated Diagram - Infinite Loop Cycle]**

Here's what happens: 
1. count changes
2. useEffect runs
3. setCount updates count
4. count changes again
5. useEffect runs again
6. And we're stuck in an infinite loop!

**[Show Browser - React Warning]**

React will actually warn you about too many re-renders and stop rendering to prevent a complete browser freeze.

**[Show Correct Code]**

The fix depends on what you're trying to do. If you want to update count periodically:

```javascript
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(c => c + 1); // ✅ Functional update
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []); // ✅ Empty dependency

  return <h1>{count}</h1>;
}
```

**[Point to Functional Update]**

The key is using functional updates - `setCount(c => c + 1)` - which lets us update state without including it in the dependency array.

**[Key Takeaway Animation]**

**Key Takeaway:** Be careful when updating state that's in your dependency array. Use functional updates when possible.

---

## [08:30 - 10:00] MISTAKE #6: Over-Reliance on useEffect

**[Transition Effect]**

**Mistake Number Six: Using useEffect When You Don't Need It**

**[Show text overlay: "Plot Twist: Sometimes you don't need useEffect!"]**

This last one is subtle. Sometimes the best useEffect is no useEffect at all!

**[Show Wrong Code]**

```javascript
function App({ name }) {
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    setDisplayName(name);
  }, []); // ❌ name not in dependencies
  
  return <h1>{displayName}</h1>;
}
```

**[Show Demo - Name Not Updating]**

Watch what happens when I change the name prop. The displayName doesn't update! That's because our useEffect only runs once, so it never sees the new prop value.

**[Face Camera]**

But here's the thing - we don't need useEffect at all for this!

**[Show Correct Code - Multiple Options]**

Option 1 - Just use the prop directly:
```javascript
function App({ name }) {
  return <h1>{name}</h1>; // ✅ No useEffect needed!
}
```

Option 2 - If you need to transform it:
```javascript
function App({ name }) {
  const displayName = name.toUpperCase(); // ✅ Derived state
  return <h1>{displayName}</h1>;
}
```

**[Show Working Demo]**

Now the name updates immediately when the prop changes. No useEffect, no state - just clean, simple React.

**[Show animated list of "useEffect is for:" with checkmarks]**
- ✓ API calls
- ✓ Subscriptions
- ✓ DOM manipulation
**[Then show "NOT for:" with X marks]**
- ✗ Derived state
- ✗ Simple transformations

useEffect is for side effects - things like API calls, subscriptions, or DOM manipulation. If you can derive your data from props or state, do that instead!

**[Key Takeaway Animation]**

**Key Takeaway:** Don't reach for useEffect by default. If you can compute it from props or state, do that instead.

---

## [10:00 - 11:00] MOCKEXPERTS PROMOTION

**[Transition: Screen wipes to MockExperts branded background]**
**[Background Music: Shifts to motivational/inspiring]**

**Speaking of React skills - let me tell you about MockExperts!**

**[Screen Recording: Navigate through MockExperts website]**
**[Show animated logo and tagline]**

If you're preparing for tech interviews, you NEED to check out MockExperts. It's the ultimate MCQ practice platform for developers.

**[Animated list appears with icons for each role]**

Whether you're interviewing for Frontend, Backend, Full Stack, DevOps, or Data Analyst positions - MockExperts has you covered with:

**[Each feature animates in with icon]**
- 💯 Over 1000+ curated MCQ questions
- 🎯 Real interview scenarios
- 📚 Detailed explanations for every answer
- 🤖 AI-powered analysis of your performance
- 🏆 Downloadable certificates you can add to LinkedIn
- 🎓 Role-specific tests tailored to your career path

**[Screen Recording: Show AI Analysis dashboard with animations]**

The AI analysis is incredible - it identifies your strengths and weaknesses and gives you personalized study recommendations.

**[Screen Recording: Show certificate preview]**

And after each exam, you can download professional certificates to showcase your skills to recruiters.

**[Show testimonial quotes appearing on screen with animated stars]**

Thousands of developers have landed their dream jobs using MockExperts. Check out the link in the description to start practicing today!

**[Transition: Wipe back to code editor]**

Now, back to React...

---

## [11:00 - 12:00] RECAP & OUTRO

**[Transition - Animated recap screen with code editor background]**

**Alright, let's quickly recap the 6 mistakes:**

**[Show All 6 Mistakes as animated cards, each appearing with sound effect]**

**1.** Missing dependency array - Always include [], even if empty
**2.** Overloading useEffect - One effect, one concern
**3.** No cleanup - Return cleanup functions for timers and subscriptions
**4.** Async directly - Define async functions inside, then call them
**5.** Infinite loops - Watch your dependencies and use functional updates
**6.** Unnecessary useEffect - Derive from props/state when possible

**[Show website preview in browser with cursor clicking around]**

I've created a full interactive demo of all these mistakes with working code examples. The link is in the description - go check it out, play with the code, and see these mistakes in action!

**[Animated graphics: Like button bouncing, subscribe button glowing]**

If this video helped you avoid even ONE of these bugs, hit that like button! And subscribe to Solve It Out for more React tutorials, JavaScript tips, and web development content.

**[Show preview thumbnails of upcoming videos sliding in]**

I've got more React content coming up - custom hooks, performance optimization, and advanced patterns. Make sure you're subscribed so you don't miss it!

**[Show comment section with sample comments appearing]**

Drop a comment and let me know - which of these mistakes have YOU made? I guarantee most of you have made at least three! 

**[Final text overlay with logo]**

Thanks for watching, and I'll see you in the next video. Happy coding!

**[End Screen - 8 seconds]**
- Subscribe button animation
- Two video recommendations
- Social media links
- "Solve It Out" logo

---

## VISUAL NOTES FOR EDITING (NO FACE CAM VERSION)

### Screen Recording Segments:
- **00:00-00:45** - Animated intro with code editor in background
- **00:45-10:00** - VS Code screen recording with code examples
- **10:00-11:00** - Browser recording of MockExperts website
- **11:00-12:00** - Split screen: code + demo browser

### Key Visual Moments:
- 00:15 - Show code bugs/errors montage with red squiggly lines
- 02:00 - Console logs flooding animation (speed up footage)
- 03:30 - Network tab showing repeated calls (highlight in red)
- 05:00 - Memory usage graph going up (Chrome DevTools)
- 07:15 - Infinite loop animation (spinning loading circle)
- 08:45 - Props not updating demo (side-by-side comparison)
- 10:30 - MockExperts platform screenshots and screen recording

### Animations & Graphics Needed:
- **Intro:** Kinetic typography title animation
- **Transitions:** Code-themed wipes and slides
- **Highlighting:** Red circles, arrows, underlines for emphasis
- **Lower thirds:** "Key Takeaway" animated badges
- **Diagrams:** Infinite loop cycle animation
- **Split screens:** Before/After comparisons
- **Cursor highlights:** Animated cursor movements to draw attention
- **Pop-ups:** Error messages, warnings, tooltips
- **Progress bar:** Show which mistake we're on (1/6, 2/6, etc.)

### Motion Graphics:
- Code snippets sliding in from sides
- Text reveals line by line
- Error indicators pulsing
- Success checkmarks animating
- Number counters for statistics

### Screen Recording Tips:
- **Clean desktop** - Hide personal files, use neutral wallpaper
- **Font size** - Use 18-22px font in VS Code
- **Theme** - Dark theme (easier on eyes, looks professional)
- **Cursor** - Use cursor highlighting software
- **Zoom in** - On important code sections
- **Smooth scrolling** - Slow, deliberate movements
- **No distractions** - Close unnecessary tabs/apps

### Music Suggestions:
- **Intro:** Upbeat, energetic (Copyright-free tech music)
- **Main content:** Light background, focus-friendly lo-fi
- **Sponsor segment:** Slightly more uplifting/inspiring
- **Outro:** Upbeat callback to intro, building to finale

### Sound Effects:
- Typing sounds (subtle, occasional)
- Error "ding" sounds
- Success "chime" sounds
- Whoosh for transitions
- Pop for text appearing
- Click sounds for cursor interactions

### Chapters (YouTube Timestamps):
```
00:00 - Intro
00:45 - Mistake #1: Missing Dependency Array
02:15 - Mistake #2: Doing Too Much
03:45 - Mistake #3: No Cleanup
05:30 - Mistake #4: Async in useEffect
07:00 - Mistake #5: Infinite Loops
08:30 - Mistake #6: Over-Reliance on useEffect
10:00 - Sponsor: MockExperts
11:00 - Recap & Outro
```

---

## VIDEO DESCRIPTION (Copy-Paste Ready)

🚀 6 Common useEffect Mistakes Every React Developer Makes

Learn how to avoid these critical useEffect bugs that could be breaking your React applications right now! In this tutorial, we cover the most common mistakes developers make with React hooks and show you exactly how to fix them.

🔗 Interactive Demo: [YOUR-WEBSITE-LINK]
🎯 Practice MCQ Tests: https://mockexperts.com

⏱️ TIMESTAMPS:
00:00 - Intro
00:45 - Mistake #1: Missing Dependency Array
02:15 - Mistake #2: Doing Too Much in One useEffect
03:45 - Mistake #3: Not Cleaning Up Subscriptions
05:30 - Mistake #4: Async Function Directly in useEffect
07:00 - Mistake #5: Creating Infinite Loops
08:30 - Mistake #6: Over-Reliance on useEffect
10:00 - Sponsor: MockExperts
11:00 - Recap & Outro

📚 WHAT YOU'LL LEARN:
✅ How to properly use dependency arrays
✅ When to split useEffect into multiple effects
✅ How to prevent memory leaks with cleanup functions
✅ The correct way to use async/await in useEffect
✅ How to avoid infinite re-render loops
✅ When NOT to use useEffect

💡 RELATED VIDEOS:
- React Hooks Tutorial
- Custom Hooks Explained
- React Performance Tips

🎓 MOCKEXPERTS - Interview Prep Platform:
Prepare for tech interviews with 1000+ MCQ questions covering:
- Frontend Development (React, Vue, Angular)
- Backend Development (Node.js, Python, Java)
- Full Stack Development
- DevOps & Cloud
- Data Analysis
Features: AI-powered analysis, certificates, real interview scenarios!

👨‍💻 FOLLOW SOLVE IT OUT:
YouTube: @solveitout
Twitter: @solveitout
GitHub: github.com/solveitout

#react #javascript #webdev #reacthooks #useeffect #programming #coding #tutorial

---

## 📊 EXPECTED METRICS
- Target Watch Time: 8-10 minutes average
- Target CTR: 8-12% (thumbnail + title optimization)
- Target Retention: 60%+ (hooks at intro, practical examples, quick pacing)
- Target Engagement: 4-6% (likes, comments, shares)

---

## 🎬 PRODUCTION NOTES (NO FACE CAM)

### Equipment Needed:
- ✅ Good USB microphone (Blue Yeti, Audio-Technica, etc.)
- ✅ Screen recording software (OBS, Camtasia, ScreenFlow)
- ✅ Video editor (Premiere Pro, Final Cut Pro, DaVinci Resolve)
- ✅ Audio editor (Audacity for cleanup)

### Recording Tips:
1. **Audio Quality is KING** - Invest in a good mic and quiet room
2. **Script Reading** - Sound natural, not robotic. Add energy and inflection
3. **Pacing** - Speak clearly at 150-160 words per minute
4. **Multiple Takes** - Record each section 2-3 times, pick the best
5. **Room Treatment** - Use blankets/foam to reduce echo

### Thumbnail Ideas (No Face):
- **Option 1:** useEffect code with big red X and "6 MISTAKES"
- **Option 2:** Split screen - wrong code vs right code with ❌ and ✅
- **Option 3:** Infinite loop symbol with "STOP THESE BUGS"
- **Option 4:** Code editor screenshot with highlighted errors
- **Use bold, contrasting colors** - Red, yellow, white on dark background
- **Large, readable text** - Visible on mobile devices

### Successful Channels Using This Style:
- Fireship
- Web Dev Simplified
- The Net Ninja (some videos)
- Traversy Media (some videos)
- Programming with Mosh

### Advantages of No Face Cam:
✅ Less pressure during recording
✅ Can re-record sections easily
✅ Focuses attention on code/content
✅ Easier to edit and fix mistakes
✅ No need for camera/lighting setup
✅ Can work in pajamas 😄

### Make It Engaging Without Face:
- 🎯 Use cursor movements strategically
- 🎯 Add text overlays and annotations
- 🎯 Include memes/GIFs sparingly
- 🎯 Vary your vocal tone and energy
- 🎯 Use sound effects for emphasis
- 🎯 Keep visual variety high

