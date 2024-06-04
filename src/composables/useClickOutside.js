import { onMounted,onBeforeUnmount} from "vue";

export default  function useClickOutside(element, clickCallback, excludeElement = null){
    const handleClickOutside = (event) => {
        if (element.value && !element.value.contains(event.target) && (!excludeElement || !excludeElement.value.contains(event.target))) {
            clickCallback();
        }
    };
    
    onMounted(() => {
        document.addEventListener('click', handleClickOutside);
    });

    onBeforeUnmount(() => {
        document.removeEventListener('click', handleClickOutside);
    });
}