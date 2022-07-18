function handleChange(name, value, formValue, setFormValue) {
  // event.preventDefault();
  setFormValue({
    ...formValue,
    [name]: value,
  });
}
export default handleChange;
