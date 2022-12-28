import React, { useState, } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";
import Modal from "../shared/Modal";
const UnionProduction = () => {
  const [union, setUnion] = useState(false)
  const location = useLocation()
  useEffect(() => {
    if (location?.pathname === "/union/dashboard/production/detail") {
      setUnion(true)
    }

  }, [])
  const [show, setShow] = useState(false)
  return (
    <>
      <p>Vancouver Film Studios</p>


    </>
  )
}

export default UnionProduction
