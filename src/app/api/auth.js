import defaultIcon from "react-native-paper/lib/typescript/src/components/MaterialCommunityIcon";

export default function signIn() {
  return new Promisse((resolve) => {
    setTimeout(() => {
      resolve({
        token: '1lk343n12jjk3n21m3123mnk123123n123123kn',
        name: 'Pedro',
      });
    }, 2000)
  })
}