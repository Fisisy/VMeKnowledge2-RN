import { Camera } from 'react-native-vision-camera';
 
function App() {
  const device = useCameraDevices().then(devices => devices.front);
  if (!device) return <Text>No camera found.</Text>;
 
  return (
    <Camera
      style={{ flex: 1 }}
      device={device}
      isActive={true}
    />
  );
}
 
export default App;