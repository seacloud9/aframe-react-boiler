/**
 * Created by brsmith on 7/3/17.
 */
import 'aframe'
import 'aframe-look-at-component'
import 'aframe-animation-component'
import 'aframe-text-geometry-component'
import 'aframe-particle-system-component'
import 'aframe-environment-component'
import 'babel-polyfill'
import {Entity} from 'aframe-react'
import React from 'react'
import PropTypes from 'prop-types'

type SceneManagerProps = {
    onChange: PropTypes.func.isRequired,
    current_scene: PropTypes.number,
    onEnvLoad: PropTypes.func
}

export default class SceneManager extends React.PureComponent {
  props: SceneManagerProps
  constructor (props) {
    super(props)
    this.state = {
      current_scene: this.props.current_scene,
      color: '#c6dff4',
      enemeyToFight: null,
      storyState: 0,
      scene_array: [
        this.startScene.bind(this)
      ],
      scene_envArray: [
        'groundColor2: #308f6d; groundColor: #246709; dressingAmount: 2; dressing: towers; horizonColor: #c6dff4; skyColor: #c6dff4; active: true; seed: 8; skyType: gradient;  fog: 0.2; ground: noise; groundYScale: 4.18; groundTexture: squares; dressingColor: #888b1d; dressingScale: 1;  gridColor: #c5a543'
      ]
    }
    var extras = require('aframe-extras')
    window.AFRAME.registerComponent('a-ocean', extras.primitives['a-ocean'])
  }

  shouldComponentUpdate (nextProps) {
    let shouldUpdate = true
    if (nextProps.enemeyToFight) shouldUpdate = nextProps.enemeyToFight === this.state.enemeyToFight
    if (nextProps.current_scene) shouldUpdate = nextProps.current_scene !== this.state.current_scene
    return shouldUpdate
  }

  setRotation (obj = 'camera', _rotation = new window.THREE.Euler(-0.039, -3.19, 0, 'XYZ')) {
    let $obj = document.getElementById('camera')
    $obj.object3D.rotation.set(-0.039, -3.19, 0)
  }

  componentDidMount () {
    setTimeout(this.props.onEnvLoad, 200)
  }

  componentWillReceiveProps (newProps) {
    this.setState(newProps)
  }

  constantSceneSwap () {
    this.maskEl = this.el.sceneEl.querySelector('#mask')
  }

  changeColor () {
    const colors = ['#c6dff4', '#c6dff4', '#c6dff4', '#c6dff4', '#c6dff4']
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    })
  }

  startScene () {
    return (
      <Entity>
        <Entity id='ocean' scale='1 1 1' primitive='a-ocean' color='#92E2E2' width='200' depth='200' density='45' speed='2' position='0, 1.445, 0' />
        <Entity primitive='a-gltf-model' src='#logo' position={{x: 0, y: 4.679, z: -6}} rotation={{x: -90, y: 180, z: 0}} material=' metalness:0.9; roughness: 0.05; sphericalEnvMap: #chrome2;' />
        <Entity primitive='a-gltf-model' src='#island' position={{x: 0, y: 0, z: -6}} rotation={{x: 0, y: 0, z: 0}} scale='0.2 0.2 0.2' />
        <Entity primitive='a-gltf-model' src='#cloud' position={{x: 0, y: 10, z: -15}} />
        <Entity primitive='a-gltf-model' src='#cloud' position={{x: 5, y: 10, z: -20}} />
        <Entity primitive='a-gltf-model' src='#cloud' position={{x: -5, y: 10, z: 0}} />
        <Entity primitive='a-gltf-model' src='#cloud' position={{x: -10, y: 10, z: 5}} />
        <Entity primitive='a-gltf-model' src='#sail' scale='0.3 0.3 0.3' position={{x: 11.724, y: -0.400, z: -3.513}} />
      </Entity>
    )
  }

  render () {
    return (
      <Entity id='mainScene' scale='15 15 15' position='0 25 -500' /* environment={this.state.scene_envArray[this.state.current_scene]} */ >
        {this.state.scene_array[this.state.current_scene]()}
      </Entity>
    )
  }
}
