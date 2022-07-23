
import './App.scss';
import Header from './components/header';
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Environment, ScrollControls, Scroll, Image, useGLTF, Plane, RoundedBox } from '@react-three/drei';
import { Section } from "./components/section";
import { useRef, useState } from 'react';
import * as THREE from 'three'
import emailjs from "@emailjs/browser";







const Model = () => {
  const gltf = useGLTF('/macbook_pro_16_2021/scene.gltf');
  return (<primitive object={gltf.scene} dispose={null} scale={[3, 3, 3]} />)
}


const Model2 = () => {


  const lapRef = useRef();

  useFrame((state) => {
    if (!lapRef.current) {
      return;
    }
    else {
      const t = state.clock.getElapsedTime();

      lapRef.current.position.y = (-4 + Math.sin(t / 1.5) * 1) / 2;
    }
  })

  return (

    <mesh castShadow position={[7, -2, 5]} ref={lapRef} rotation={[0, -0.9, 0]}>
      <Model />
    </mesh>
  )
}

const Monk = () => {
  const gltf = useGLTF('/monk_character/scene.gltf');
  return (<primitive object={gltf.scene} dispose={null} scale={[5, 5, 5]} />)
}

const MonkModel = () => {

  const monkRef = useRef();

  useFrame(() => {
    if (!monkRef.current) {
      return;
    }
    else {
      monkRef.current.rotation.y += 0.008;
    }
  })
  return (
    <mesh castShadow position={[10, -30, 5]} ref={monkRef} rotation={[0, -0.9, 0]}>
      <Monk />
    </mesh>
  )
}


const ContactModel = () => {
  return (
    <RoundedBox position={[0,-120,0]} args={[1, 1, 1]} radius={0.05} smoothness={4} >
      <meshPhongMaterial color="#f3f3f3" wireframe />
    </RoundedBox>
  )
  
  
}


const Foo = (props) => {
  const ref = useRef()
  // useFrame(() => {
  //   ref.current.material.zoom = ... // 1 and higher
  //   ref.current.material.grayscale = ... // between 0 and 1
  //   ref.current.material.color.set(...) // mix-in color
  // })
  return <Image position={props.position} scale={props.scale} ref={ref} url={props.src} />
}







function App() {

  console.log(window.top);

  const form  = useRef();

  const [formData,setFormData] = useState(({
    user_email:'',message:''
  }))

  // console.log(formData);

  function handleChange(e){
    setFormData((prevState)=>({...prevState,[e.target.name]:e.target.value}))

  }

  const sendEmail = (e)=>{
    e.preventDefault();
    emailjs.sendForm('service_da4f37h', 'template_mwohobc', form.current, 'HaDTEfQDMAtI7vaJ0')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    console.log(form.current);
  }


  return (
    <>
      <Header />
      <Canvas shadows camera={{ position: [0, 0, 20], fov: 70 }}>
        <ambientLight intensity={1} />
        <ScrollControls damping={2} pages={5}>
          <Scroll>
            <Model2 />
            <pointLight castShadow args={["#fff", 3, 15]} position={[8, 4, 0]} shadow-mapSize={[512, 512]} />
            <Plane receiveShadow args={[25, 25]} position={[10, -3, 1]} rotation={[-Math.PI / 2, 0, 0]} >
              <meshPhongMaterial receiveShadow color="#211826" />
            </Plane>
            <MonkModel />
            <pointLight castShadow args={["red", 3, 15]} position={[10, -28, 5]} shadow-mapSize={[512, 512]} />
            <Plane receiveShadow args={[250, 250]} position={[16, -30, 1]} rotation={[-Math.PI / 2, 0, 0]} >
              <meshPhongMaterial receiveShadow color="#211826" />
            </Plane>

            <Foo id="Projects" position={[-17, -56, 0]} scale={[10, 10, 1]} src="/amazon.png" />

            <Foo position={[15, -68, 0]} scale={[15, 5, 1]} src="/bill.png" />

          </Scroll>

          <Scroll html style={{ width: '100%' }}>
            <h1 style={{ position: 'absolute', top: `40vh`, left: '5vw', fontSize: '10em', transform: `translate3d(0,-100%,0)`, color: '#D94F43', fontFamily: "Great Vibes" }}>Savjot</h1>
            {/* <h1 style={{ position: 'absolute', top: `50vh`, left: '5vw', fontSize: '9em', transform: `translate3d(0,-100%,0)`,color:"#FFF46D" }}>DHILLON</h1> */}
            <h1 style={{ position: 'absolute', top: `65vh`, left: '5vw', fontSize: '10em', transform: `translate3d(0,-100%,0)`, color: "#D94F43", fontFamily: "Great Vibes" }}>Dhillon</h1>
            <h1 style={{ position: 'absolute', top: '120vh', left: '10vw', fontFamily: "Great Vibes", color: '#D94F43', fontSize: '4em' }}>About</h1>

            <div style={{ position: 'absolute', top: '140vh', left: '10vw', fontFamily: "Goldman", color: '#ffe6de', fontSize: '1.5em', width: "40%" }}>
              <p >I am a Full stack developer. I come equipped with MERN stack and a passion
                to learn new skills and put them to test. </p>
              <p >I am currently pursuing my
                Bachelor's in Computer Science at San Francisco State University. </p>
              <p>Apart from school, I like to listen to Music and I am learning how to play the Keyboard :)</p>
            </div>

            <h1 style={{ position: 'absolute', top: '165vh', right: '15vw', fontFamily: "Goldman", color: '#D94F43', fontSize: '1em' }}>^FULL-STACK WIZARD^</h1>

            <h1 id='Projects' style={{ position: 'absolute', top: '200vh', right: '10vw', fontFamily: "Great Vibes", color: '#D94F43', fontSize: '4em' }}>Projects</h1>

            <div style={{ position: 'absolute', top: '230vh', right: '20vw', fontFamily: "Goldman", color: '#FFF46D', fontSize: '1em' }}>
              <h1 >E-Commerce Website Amazon Clone</h1>
              <ul style={{ color: "#ffe6de" }}>
                <li>Implented using React and Firebase</li>
                <li>Used React Context API and React hooks</li>
                <li>Implented Firebase Authentication and Realtime Database</li>
                <li>Provided payment support through Stripe</li>
              </ul>
            </div>


            <div style={{ position: 'absolute', top: '275vh', left: '10vw', fontFamily: "Goldman", color: '#FFF46D', fontSize: '1em' }}>
              <h1 >Full Stack Bill generator</h1>
              <ul style={{ color: "#ffe6de" }}>
                <li>Implented using React,NodeJS,Express and Mongodb</li>
                <li>Created both client and Server-side from scratch</li>
                <li>Front-end implemented with React and used jspdf to print orders</li>
                <li>Backend created using Express with Mongodb as database</li>
                <li>Implemented user Authentication using passport JWT tokens</li>
                <li>Made server secure using https protocol and generating self signed certificate</li>
                <li>Handled Cross origin request using cors npm module</li>
                <li>Database managed with mongoose </li>
              </ul>
            </div>

            <div style={{ position: 'absolute', top: '320vh', left: '10vw', fontFamily: "Goldman", color: '#FFF46D', fontSize: '1em' }}>
              <h1 >TodoList Web App</h1>
              <ul style={{ color: "#ffe6de" }}>
                <li>Front-end designed using html,css, javascript</li>
                <li>Backend database support through Firebase realtime database</li>
                <li>Allows users to add,edit and complete tasks</li>
                <li>Tasks can be sorted according to due date</li>
              </ul>
            </div>

            <div style={{ position: 'absolute', top: '320vh', right: '10vw', fontFamily: "Goldman", color: '#FFF46D', fontSize: '1em' }}>
              <h1 >Java 2-D Tank Game</h1>
              <ul style={{ color: "#ffe6de" }}>
                <li>Game designed using Java Swing</li>
                <li>Implemented Two tanks with keyboard controls.</li>
                <li>Tanks are able to shoot and cause explosions on screen</li>
                <li>Implemented health bars for both tanks.</li>
              </ul>
            </div>

            <div style={{ position: 'absolute', top: '345vh', left: '35vw', fontFamily: "Goldman", color: '#FFF46D', fontSize: '1em' }}>
              <h1 >Portfolio Website</h1>
              <ul style={{ color: "#ffe6de" }}>
                <li>Implemented in ReactJS</li>
                <li>Used React-three/fiber and React-three/drei</li>
                <li>Used various React hooks.</li>
              </ul>
            </div>


            <h1 style={{ position: 'absolute', top: '370vh', left: '10vw', fontFamily: "Great Vibes", color: '#D94F43', fontSize: '4em' }}>Contact</h1>
            <div style={{ position: 'absolute', borderRadius: '20px', width: '60%', top: '390vh', left: '10vw', fontFamily: "Goldman", color: '#D94F43', fontSize: '4em', padding: '1rem' }}>

              <form onClick={sendEmail} ref={form}>
                <h1 style={{ fontSize: '2.5rem', color: '#FFF' }}>Send me an message</h1>
                <div style={{ display: 'flex', flexDirection: 'column' }}>



                  <div style={{}}>
                    <label style={{ fontSize: "2rem", fontFamily: "Goldman", fontWeight: '800', color: "#FFF46D" }}>Enter email</label><br />
                    <input onChange={handleChange} value={formData.useremail} name='user_email' style={{ width: '70%', border: 'none', borderRadius: '10px', height: '2em' }}></input><br />
                  </div>
                  <div style={{}}>
                    <label style={{ fontSize: "2rem", fontFamily: "Goldman", fontWeight: '800', color: "#FFF46D" }}>Enter message</label><br />
                    <textarea placeholder='Please drop your email with your message' onChange={handleChange} value={formData.message} name='message' style={{ width: '70%', border: 'none', borderRadius: '10px' }} rows={10}></textarea>
                  </div>
                  <div style={{fontSize:'1rem'}}>
                    <span style={{color:'#FFF46D'}}>Email</span>:<span style={{color:"#fff",textDecoration:'underline'}}>savidsav99@gmail.com</span>
                  </div>
                </div>

                <button style={{ backgroundColor: 'green', color: '#fff', fontWeight: '800', fontFamily: "Goldman", fontSize: '1.5rem', padding: '1.5rem', border: 'none', borderRadius: '10px' }} type='button'>SEND!</button>
              </form>
            </div>

            {/* <h1 style={{ position: 'absolute', top: '450vh', left: '10vw,fontFamily: "Great Vibes"', color: '#D94F43', fontSize: '4em' }}>Resume</h1> */}
          </Scroll>
        </ScrollControls>
        <Environment background >
          <mesh scale={100}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshBasicMaterial side={THREE.BackSide} color="#211826" />
          </mesh>
        </Environment>
      </Canvas>


    </>
  );
}

export default App;
