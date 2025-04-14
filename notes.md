`project setup`
npx create-next-app@latest .
no esLint and elias

shadcn install kara
npx shadcn@latest init => creates utils file
(new york style, neutral base colour)

npx shadcn@latest add button card

`authentication` ke liye clerk:
install from website documentation- npm install @clerk/nextjs
.env.local me env variables daal do
create middleware under src
wrap rootLayout by clerkProvider

`convex` database setup
queries-fetch data
mutations-insert update or remove data
actions- communicate with third party services

npm i convex => will give a folder convex with some files
npx convex dev

make a schema.ts file
users bana diya


`getStream` for video calling features
login karlo and "App access keys" mein jao and env variables copy karke .env.local me daaldo
NEXT_PUBLIC_STREAM_API_KEY -> client side me use karenge,  therefore to be prefixed by next public
STREAM_SECRET_KEY

npm i @stream-io/video-react-sdk //for the client
npm i @stream-io/node-sdk //for the server

`webhooks`
clerk me jao and
1. sign up (done)
2. crate app (done)
3. make a jwt template with convex: copy the issuer code
4. auth.config.ts banao convex me and paste this issuer code there in the place of provided link (all this is available in convex docs)
567. for react
8.  configure ConvexProviderWithClerk => wrap the app into this => we make providers folder under components and add ConvexClerkProvider.tsx            V.V.imp

layout.tsx ko bhi clerkProvider ki jagah ConvexClerkProvider se wrap karenge

http actions me jaake dekho (convex docs mein)
webhook banao and uske secrets convex me he env variables me jaake daal do

http.ts file banegi under convex folder
to check that user.created event is coming from clerk, install svix
SVIX(WEBHOOKS AS A SERVICE)
npm i svix

users file banayi and usme syncUser func likha, jo DB me unique users ki entry karta h => from clerk to convex

`convex queries and mutations`
getUsers and getUserByClerkId bhi add kardo

iske baad convex folder me he interviews.ts aur comments.ts files bana lo
pehle jaake schema define kardo interviews and comments ke liye
comments.ts mein - addComment and getComments
interviews.ts mein : getAllInterviews  getAllInterviews  getInterviewByStreamCallId  createInterview updateInterviewStatus

`navbar`
modeToggle, dashboardbtn and userbutton
modeToggle ke liye themeProvider banao and  usme shadcn wala code daaldo (check documenttion)
userbutton - coming from clerk nextjs

dashboardbtn ke liye we will create a hook 
Hooks folder under src
1. useUserRole.ts
useQuery is used to fetch from convex db

`homepage - interiewer UI : welcome back and 4 cards with diff gradients AND CANDIDATE VIEW AS WELL`
app me (admin) bana do and usme dashboard 
(root) mein schedule recording aur meeting page.tsx and home me page.tsx daaldo jo layout ke sath tha pehle

NOTE_ jahan bhi hook use kara, vo "use client" karna hoga

constants folder banao and usme index.ts file store karo: this file stores info about actionCards, time slots, questions, interview category andlanguages

component banaya - actionCard
isme sab kuch hai, except the functionalities : click karne se kya hoga

go to page.tsx and wahan handleQuickAction function hai
vo schedule aur recording pages ko route kardega and 
showModal aur modalType ko define kar dega depending upon the action,title

iske liye we will have a component meetingModal with 4 attributes

MEETINGMODAL.TSX
we will use a dialog component from shadcn
install karlo
start with props interface
CHECK IT OUT

`stream provider setup for video calls`
streamClientProvider.tsx provider banega
use client
streamVideoClient is for users whenever they log in to out application
useUser will give you the authenticated user
this client object will be created for every user

streamTokenProvider ke liye we have stream.actions.ts file under actions under src
useUser -> client side ke liye hota h
currentUser -> server side ke liye hota hai

loaderUI bhi bana diya

root ke andar layout.tsx banaya and usme children ko wrap krdiya using streamClientProvider  =>  now we can use stream in all pages of the group (root)
i.e home meeting schedule and recording


`useMeetingActions hook`
isme 2 func hain, createInstantMeeting and joinMeeting
1. createInstantMeeting - client.call("default",id) => call type and id
2. joinMeeting: simply user ko push kardo route pe, no user => error

react hot toast install kara, and then humne app.layout me jaake themeProvider ko wrap krdiya under TOASTER

`meeting page`
we need to have a state to check if we are in setup stage or in meeting room
ek custom hook => useGetCallById that will tell us if call is loading or has been loaded
meetingSetup aur MeetingRoom components banane padenge


`meeting setup`
bcoz meeting page me humne <StreamCall call = {call}> kiya hua h and call depends on useGetCallById hook, so now in meetinggSetup we can simply use "useCall()" instead of useGetCallById 

2 useStates use karenge for mic and cam
then we use icons and switch from shadcn 

`meeting room (left half - not code editor part)`
we have resizable (shadcn component)

iske andar end call button aur code editor components render honge


`end call button`
endCall func bana rakha h and icon return karta h red color ka.
interviews.ts mein jo getInterviewByStreamCallId banaya tha, vo use hora h and 
  const call = useCall(); instead of useGetCallById

`code editor`
npm i @monaco-code-editor/react
scroll-area and select ko bhi add karo from shadcn
select- to select problem and languages

handleQuestionChange aur handleLanguageChange banao
then poora tailwind css code

`recordings page`
hooks use krrenge => use client
ek hook banao : useGetCalls => easy to understand
Promise.all => parallel api calls, sab calls ek sath fetch
flatMap => calls ko merge krdega into array

`RecordingCard component` render hoga isme
npm i date-fns
calculateRecordingDuration func is written in the utils.ts file
return mei recordings page ka UI

`schedule page`
interviewScheduleUI render hoga isme
const [open, setOpen] = useState(false); => dialog open or not (schedule interview button pe click karne ke baad aata h jo)
const [isCreating, setIsCreating] = useState(false); => loading state when interview is being created

create interview => func was made in interview.ts file
useState for formData
then ek func banaya : scheduleMeeting krke
meeting create krke wapas default values set karte hain

then addInterviewer
remove interviewer


return UI mein, 
we need a userInfo component
calendar ka UI copied from shadcn
we had to delete date-fns and install calendar
add time as well (from index file)

`meeting card comp`


`dashboard page`


`comment dialog`


`testing`