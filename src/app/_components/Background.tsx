/* src/app/_components/Background.tsx */

import BgIcons from '@/_components/_icons/BgIcons';

export default function Background() {
  return (
    <section id="animated-cta-bar">
      <ul className="floating-icons">
        <li className="drift drift1 delay1">
          <div className="float float1">
            {/*GitHub */}
            <BgIcons kind="github" size={2} />
          </div>
        </li>
        <li className="drift drift2 delay3">
          <div className="float float2">
            {/*React */}
            <BgIcons kind="react" size={3} />
          </div>
        </li>
        <li className="drift drift3">
          <div className="float float3">
            {/*Html */}
            <BgIcons kind="html" size={2} />
          </div>
        </li>
        <li className="drift drift4 delay2">
          <div className="float float4">
            {/*Nextjs */}
            <BgIcons kind="nextjs" size={3} />
          </div>
        </li>
        <li className="drift drift5">
          <div className="float float5">
            {/*Tailwind */}
            <BgIcons kind="tailwind" size={2} />
          </div>
        </li>
        <li className="drift drift6 delay2">
          <div className="float float6">
            {/*Nextjs */}
            <BgIcons kind="nextjs" size={3} />
          </div>
        </li>
        <li className="drift drift7">
          <div className="float float7">
            {/*Vercel */}
            <BgIcons kind="vercel" size={2} />
          </div>
        </li>
        <li className="drift drift8 delay5">
          <div className="float float8">
            {/*Js */}
            <BgIcons kind="js" size={1} />
          </div>
        </li>
        <li className="drift drift9 delay5">
          <div className="float float9">
            {/*Boostrap*/}
            <BgIcons kind="bootstrap" size={2} />
          </div>
        </li>
        <li className="drift drift10 delay3">
          <div className="float float10">
            {/*Nodejs*/}
            <BgIcons kind="nodejs" size={1} />
          </div>
        </li>
        <li className="drift drift5 delay4">
          <div className="float float7">
            {/*Express*/}
            <BgIcons kind="express" size={3} />
          </div>
        </li>
        <li className="drift drift2 delay5">
          <div className="float float3">
            {/*Nestjs*/}
            <BgIcons kind="nestjs" size={2} />
          </div>
        </li>
        <li className="drift drift3 delay1 mt-5">
          <div className="float float8">
            {/*MongoDb*/}
            <BgIcons kind="mongodb" size={2} />
          </div>
        </li>
        <li className="drift drift6 delay5">
          <div className="float float1">
            {/*Typescript*/}
            <BgIcons kind="ts" size={3} />
          </div>
        </li>
        <li className="drift drift9 delay2">
          <div className="float float10">
            {/*Git*/}
            <BgIcons kind="git" size={1} />
          </div>
        </li>
      </ul>
    </section>
  );
}
