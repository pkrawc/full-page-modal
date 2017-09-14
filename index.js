import React, { PureComponent } from "react"
import styled from "styled-components"

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background: rgba(249, 249, 249, 0.96);
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  transform: ${({ open }) => (open ? "scale(1)" : "scale(1.25)")};
  transition: 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  .rnt-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    font-size: 2rem;
    height: 1em;
    width: 1em;
  }
  .rnt-modal-body {
    padding: 0 1em;
    max-width: 960px;
    max-height: 100%;
    overflow: auto;
    width: 100%;
  }
  @media (min-width: 720px) {
    padding: 0 24px;
  }
`

export default class Modal extends PureComponent {
  state = {
    open: false
  }
  toggleModal = e => {
    e.preventDefault()
    this.setState({ open: !this.state.open })
  }
  render() {
    return [
      this.props.children(this.toggleModal),
      <ModalContainer open={this.state.open}>
        <span className="rnt-close mdi mdi-close" onClick={this.toggleModal} />
        <div className="rnt-modal-body">{this.props.modalBody}</div>
      </ModalContainer>
    ]
  }
}
