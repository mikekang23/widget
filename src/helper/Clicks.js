const onToggleClick = (index, activeIndex, setter) => {
  if (activeIndex == null){
    setter(index);
  }else{
    setter(null);
  }

}

export {
  onToggleClick
}
