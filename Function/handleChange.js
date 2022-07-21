function handleChange(name, value, formValue, setFormValue) {
  setFormValue({
    ...formValue,
    [name]: value,
  });
}
export default handleChange;
