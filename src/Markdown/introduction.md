# Very Small State Manager (Vssm)

A very small and oversimplified state manager written in pure Javascript.

This documentation site was made using Vssm!
Check out the source code [here](https://github.com/tk-ni/Vssm-docs).

## Why?

Vssm was created from a personal need for a small, fast and basic state management library. It exists to give the simplest solution to small frontend projects, so you won't have to install and configure robust libraries just to define some variables.

Vssm has **_no dependencies_** and it weighs **_2kb_** in it's minified version.
It's so small it's not even there. You can just plug it in your current project and start managing your state.
<br/>
<br/>
_Keep in mind that Vssm is not here to replace popular state management libraries, it's here to give a tiny, native solution for projects that wish to stay relatively small, and still enjoy state management._

### Vssm is

- Extremely light-weight
- A Plug-and-Play solution
- Super easy to get the hang of
- Has no actions, reducers or complicated cases
- Dependency-less

# Some backstory

One night a few months ago, I couldn’t fall asleep. I aimlessly opened GH and noticed my ex-college-teacher uploaded an assignment for his students.  
<br/>

The assignment was to create a Pokedex website using a public Pokémon API. The goal was to implement it in Javascript (without frameworks or libs, since his current students are probably web-dev beginners who are still learning the basics of Javascript).

As a joke, and because I couldn’t sleep, I started working on my Pokémon website. Thankfuly my Javascript skills are decent and I was able to make something nice in a few hours, without using a framework or lib.  
<br/>

But along the way I struggled, because I didn’t have a state manager (I'm used to working with a global state on my day-to-day job).

Using one of my go-to's would require me to install an external package and maybe even use a bundler (and even if I did, I couldn't use robust state management libs and expect Javascript juniors to understand what's going on).  
<br/>

Long story short, I found myself hacking together a super-simple-and-weird state management script at 2 AM, just to manage my Pokémon site.
I uploaded my site to GH pages, and forgot about it.  
<br/>

But I kept thinking about my simple state manager. I felt it could be useful in smaller, vanilla Javascript projects, where there's no need for bigger libraries. Eventually I decided to improve my solution and release it as a minimal package.
