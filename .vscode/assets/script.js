const form = document.querySelector("form")
const nlwSetup = new NLWsetup(form)

const data = {
  run: ["01-03", "01-02", "01-03"],
}
nlwSetup.setData()
nlwSetup.load()
