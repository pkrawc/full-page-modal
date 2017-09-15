# Thermal Modal

this is a component is a full page modal using `styled-components` and `react`. It's built because why not. It's better than card based modal because who wants that stupid margin on mobile. It's extendable, so change it however you want. API is described below.


```javascript
import Modal from 'full-page-modal'

const App = props => {
  const modalBody = (
    <div>some modality right here</div>
  )
  return (
    <App>
      <Modal modalBody={modalBody}>
        {toggle => (
          <HeroSection><Button onClick={toggle}>Click me to open the modal</Button></HeroSection>
        )}
      </Modal>
    </App>
  )
}
```

