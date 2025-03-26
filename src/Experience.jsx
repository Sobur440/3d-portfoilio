import {
  ContactShadows,
  Float,
  Gltf,
  Html,
  PresentationControls,
  Text,
} from "@react-three/drei";

export default function Experience() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight intensity={1} position={[6, 7, 0]} />

      <PresentationControls
        global
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        coonfig={{ mass: 2, tension: 400 }}
        snap
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#111827"}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <Gltf src="/laptop.gltf" position-y={-1.2}>
            <Html
              transform
              wrapperClass="htmlWrapper"
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://sobur.vercel.app/" />
            </Html>
          </Gltf>
          <Text
            font="/bangers-v20-latin-regular.woff"
            fontSize={0.5}
            position={[2, 0.75, 0.75]}
            rotation-y={-Math.PI / 2}
            maxWidth={2}
            textAlign="center"
          >
            SOBUR ABUBAKAR
          </Text>
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
