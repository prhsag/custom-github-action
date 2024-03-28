import{Command as x}from"commander";import f from"path";import u from"fs-extra";function c(){let o=f.join("package.json");return u.readJSONSync(o)}import{existsSync as y}from"fs";import{Command as h}from"commander";import w from"path";import m from"prompts";import{z as a}from"zod";import r from"chalk";var i={error(...o){console.log(r.red(...o))},warn(...o){console.log(r.yellow(...o))},info(...o){console.log(r.cyan(...o))},success(...o){console.log(r.green(...o))},break(){console.log("")}};import p from"chalk";var k=a.object({cwd:a.string(),yes:a.boolean(),name:a.optional(a.string())}),l=new h().name("init").description("initialize your project and install dependencies").option("-y, --yes","skip confirmation prompt.",!1).option("-c, --cwd <cwd>","the working directory. defaults to the current directory.",process.cwd()).option("-n, --name <name>","the name of the github action.","").action(async o=>{try{let n=k.parse(o),t=w.resolve(n.cwd);y(t)||(i.error(`The path ${t} does not exist. Please try again.`),process.exit(1));let s=await v(t);i.info(""),i.info(`${p.green("Success!")} Project initialization completed. You may now add components.`),i.info("")}catch(n){console.log(n)}});async function v(o,n=!1){let t=e=>p.cyan(e),s=[{name:"javascript",label:"JavaScript"},{name:"docker",label:"Docker"},{name:"composite",label:"Composite"}],g=e=>/^[a-zA-Z0-9_-]+$/.test(e)?!0:(console.log("Invalid name. The name must not contain special characters or spaces, except for underscores and hyphens."),!1),d=await m([{type:"text",name:"action_name",message:"What is the name of your action? ",validate:e=>g(e)},{type:"select",name:"custom_action",message:`Which ${t("custom action")} would you like to use?`,choices:s.map(e=>({title:e.label,value:e.name}))},{type:e=>e==="javascript"?"toggle":null,name:"typescript",message:`Would you like to use ${t("TypeScript")} (recommended)?`,initial:!0,active:"yes",inactive:"no"}]);if(!n){let{proceed:e}=await m({type:"confirm",name:"proceed",message:`Write configuration to ${t("components.json")}. Proceed?`,initial:!0});e||process.exit(0)}return d}process.on("SIGINT",()=>process.exit(0));process.on("SIGTERM",()=>process.exit(0));async function b(){let o=await c(),n=new x().name("custom-gh-action").description("create custom github action").version(o.version||"1.0.0","-v, --version","display the version number");n.addCommand(l),n.parse()}b();
//# sourceMappingURL=index.js.map