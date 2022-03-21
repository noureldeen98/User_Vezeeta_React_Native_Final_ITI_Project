import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LogoutScreen from './LogoutScreen';


const Tab = createBottomTabNavigator();
const Navbar = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Logout" component={LogoutScreen} />
      </Tab.Navigator>
      
    </>
  )
}
export default Navbar;