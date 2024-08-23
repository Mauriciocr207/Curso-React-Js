import { useSelector } from "react-redux";

export default function useStore() {
  const { isModalOpen } = useSelector(state => state.ui);

  return {
    isModalOpen
  }
}