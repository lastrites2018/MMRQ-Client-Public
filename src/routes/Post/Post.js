import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './Post.css'
import AddressSelect from './AddressSelect'
import PhotoUpload from './PhotoUpload'
import axios from 'axios'
import Api from '../../util/Api'

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentClassification: '',
      classificationData: '',
      usernameData: '',
      titleData: '',
      locationCityData: '',
      locationDistrictData: '',
      locationDetailData: '',
      speciesData: '',
      sexData: '',
      contentsData: '',
      imageData: '',
      dogSpecies: [
        '모르겠음',
        '골든 두들',
        '골든 리트리버',
        '그레이 하운드',
        '그레이트 데인',
        '그레이트 스위스 마운틴 도그',
        '그레이트 피레니즈',
        '그린란드견',
        '그리스 헤어하운드',
        '기슈견',
        '까나리오',
        '코통 드 튈레아르',
        '나폴리탄 마스티프',
        '노르위치 테리어',
        '노포크 테리어',
        '뉴펀들랜드',
        '닥스훈트',
        '달마시안',
        '도베르만',
        '도사견',
        '라사압소',
        '래브라도 리트리버',
        '마스티프',
        '말티즈',
        '맨체스터 테리어',
        '미니어처 불테리어',
        '미니어처 핀셔',
        '믹스견',
        '바셋 하운드',
        '버니즈 마운틴 독',
        '버들링턴 테리어',
        '보더콜리',
        '보스턴 테리어',
        '복서',
        '불도그',
        '불테리어',
        '비글',
        '비숑 프리제',
        '빠삐용',
        '사모예드',
        '삽살개',
        '샤페이',
        '세인트 버나드',
        '셔틀랜드 쉽독',
        '셰퍼드',
        '슈나우저',
        '스피츠',
        '시바견',
        '시베리안 허스키',
        '시츄',
        '실키 테리어',
        '아메리칸 불리',
        '아키타견',
        '요크셔 테리어',
        '웰시 코기',
        '진돗개',
        '차우차우',
        '치와와',
        '코카 스파니엘',
        '콜리',
        '퍼그',
        '페키니즈',
        '포메라니안',
        '푸들, 풍산개',
        '프렌치 불도그',
        '핏 불 테리어'
      ]
    }
    this.makeLocationCityData = this.makeLocationCityData.bind(this)
    this.makeLocationDistrictData = this.makeLocationDistrictData.bind(this)
    this.makeImageData = this.makeImageData.bind(this)
    this.cancelPhoto = this.cancelPhoto.bind(this)
  }
  makeImageData = val => {
    this.setState({
      imageData: val
    })
  }
  cancelPhoto = () => {
    this.setState({
      imageData: ''
    })
  }
  classificationSelect = event => {
    this.setState({
      currentClassification: event.target.value,
      classificationData: event.target.value
    })
  }
  makeRewardData = event => {
    this.setState({
      rewardData: event.target.value
    })
  }
  makeTitleData = event => {
    this.setState({
      titleData: event.target.value
    })
  }
  makeLocationCityData = event => {
    this.setState({
      locationCityData: event.target.value
    })
  }
  makeLocationDistrictData = event => {
    this.setState({
      locationDistrictData: event.target.value
    })
  }
  makeLocationDetailData = event => {
    this.setState({
      locationDetailData: event.target.value
    })
  }
  makeSpeciesData = event => {
    this.setState({
      speciesData: event.target.value
    })
  }
  makeSexData = event => {
    this.setState({
      sexData: event.target.value
    })
  }
  makeContentsData = event => {
    this.setState({
      contentsData: event.target.value
    })
  }
  makePetNameData = event => {
    this.setState({
      petNameData: event.target.value
    })
  }
  missingOrFoundPlace = () => {
    if (this.state.currentClassification === '찾아주세요') {
      return <div className="missngPlace">실종장소</div>
    } else if (this.state.currentClassification === '목격했어요') {
      return <div className="iFound">목격장소</div>
    } else if (this.state.currentClassification === '') {
      return <div className="no">장소</div>
    }
  }
  reward = () => {
    if (this.state.currentClassification === '찾아주세요') {
      return (
        <span className="reward">
          사례금:{' '}
          <input
            type="text"
            name="reward"
            placeholder="금액"
            size="8"
            onChange={this.makeRewardData}
            value={this.state.rewardData}
          />{' '}
          만 원
        </span>
      )
    }
  }
  makePostDate = () => {
    var date = new Date()
    this.setState({
      postDateData: date
    })
  }

  makePostData = () => {
    if (
      this.state.classificationData &&
      this.state.titleData &&
      this.state.locationCityData &&
      this.state.locationDistrictData &&
      this.state.locationDetailData &&
      this.state.speciesData &&
      this.state.sexData &&
      this.state.contentsData &&
      this.state.rewardData &&
      this.state.imageData &&
      this.state.petNameData
    ) {
      this.setState({
        postData: {
          username: this.props.userInfo.name,
          title: this.state.titleData,
          citylocation: this.state.locationCityData,
          districtlocation: this.state.locationDistrictData,
          detaillocation: this.state.locationDetailData,
          species: this.state.speciesData,
          sex: this.state.sexData,
          contents: this.state.contentsData,
          reward: this.state.rewardData,
          petimage: this.state.imageData,
          petname: this.state.petNameData,
          userid: this.props.userInfo.userid,
          postdate: this.state.postDateData,
          handphone: this.props.userInfo.handphone,
          email: this.props.userInfo.email
        }
      })
    } else if (
      this.state.classificationData &&
      this.state.titleData &&
      this.state.locationCityData &&
      this.state.locationDistrictData &&
      this.state.locationDetailData &&
      this.state.speciesData &&
      this.state.sexData &&
      this.state.contentsData &&
      this.state.imageData
    ) {
      this.setState({
        postData: {
          username: this.props.userInfo.name,
          title: this.state.titleData,
          citylocation: this.state.locationCityData,
          districtlocation: this.state.locationDistrictData,
          detaillocation: this.state.locationDetailData,
          species: this.state.speciesData,
          sex: this.state.sexData,
          contents: this.state.contentsData,
          petimage: this.state.imageData,
          userid: this.props.userInfo.userid,
          postdate: this.state.postDateData,
          handphone: this.props.userInfo.handphone,
          email: this.props.userInfo.email
        }
      })
    } else {
      return
    }
  }

  submitData = () => {
    if (
      this.state.currentClassification === '목격했어요' &&
      this.state.classificationData &&
      this.state.titleData &&
      this.state.locationCityData &&
      this.state.locationDistrictData &&
      this.state.locationDetailData &&
      this.state.speciesData &&
      this.state.sexData &&
      this.state.contentsData &&
      this.state.imageData
    ) {
      axios
        .post(Api.witness, this.state.postData)
        // .post('http://34.217.9.241/witness', this.state.postData)
        .then(res => {
          console.log('목격했어요 리스폰스 성고오오옹')
        })
        .then(() => {
          setTimeout(() => {
            this.props.history.push('/witness')
          }, 500)
        })
        .catch(err => console.log('목격했어요 에러러러러러러러럴'))
    } else if (
      this.state.currentClassification === '찾아주세요' &&
      this.state.classificationData &&
      this.state.titleData &&
      this.state.locationCityData &&
      this.state.locationDistrictData &&
      this.state.locationDetailData &&
      this.state.speciesData &&
      this.state.sexData &&
      this.state.contentsData &&
      this.state.imageData &&
      this.state.petNameData
    ) {
      axios
        .post(Api.find, this.state.postData)
        .then(res => {
          console.log('실종신고 리스폰스 성고오오오오오옹')
        })
        .then(() => {
          setTimeout(() => {
            this.props.history.push('/find')
          }, 500)
        })
        .catch(err => console.log('실종신고 에러러러러러러러럴'))
    }
  }
  petName = () => {
    if (this.state.currentClassification === '찾아주세요') {
      return (
        <span className="dogname">
          <span>이름:</span>
          <input
            type="text"
            name="dogName"
            size="10"
            placeholder="강아지 이름"
            value={this.state.petNameData}
            onChange={this.makePetNameData}
          />
        </span>
      )
    }
  }

  postImage = () => {
    const fd = new FormData()
    fd.append('image', this.state.imageData, this.state.imageData.name)
    axios
      .post(Api.fileupload, fd, {
        onUploadProgress: progressEvent => {
          console.log(
            'Upload Progress: ' +
              Math.round((progressEvent.loaded / progressEvent.total) * 100) +
              '%'
          )
        }
      })
      .then(res => {
        console.log(res, '실종신고 리스폰스으으으')
      })
      .then(() => {
        this.props.history.push('/find')
      })
      .catch(err => console.log(err, '실종신고 에러러러러러러러'))
  }

  render() {
    if (!this.props.userInfo) {
      alert('로그인 해주세요')
      this.props.history.push('/login')
    }
    return (
      <div className="postBody">
        <div className="postPictureBody">
          <img id="img" src={this.state.imageData} alt="" />
        </div>
        <PhotoUpload
          makingImage={this.makeImageData}
          photoSelectedOrNot={this.state.imageData}
          cancelPhoto={this.cancelPhoto}
        />
        <div className="classificationButton">
          <div>유형을 선택해주세요</div>
          <select
            id="classificationSelect"
            onChange={this.classificationSelect}
          >
            <option value="">Select One...</option>
            <option value="찾아주세요">찾아주세요</option>
            <option value="목격했어요">목격했어요</option>
          </select>
        </div>
        <div className="title">
          <div>글제목</div>
          <input
            onChange={this.makeTitleData}
            value={this.state.titleData}
            type="text"
            name="title"
            size="100"
            placeholder="   글 제목"
          />
        </div>
        {this.missingOrFoundPlace()}
        <AddressSelect
          changeLocationCity={this.makeLocationCityData}
          changeLocationDistrict={this.makeLocationDistrictData}
        />
        <div className="exactLocation">
          <input
            type="text"
            name="exactLocation"
            size="100"
            placeholder="상세 주소"
            value={this.state.locationDetailData}
            onChange={this.makeLocationDetailData}
          />
        </div>
        <div className="dogInfo">
          <span className="species">
            <span>견종:</span>
            <select className="speciesSelect" onChange={this.makeSpeciesData}>
              <option value="">Select One...</option>
              {this.state.dogSpecies.map((dog, index) => {
                return (
                  <option value={dog} key={index}>
                    {dog}
                  </option>
                )
              })}
            </select>
          </span>
          <span className="sex">
            <span>성별:</span>
            <select className="sexSelect" onChange={this.makeSexData}>
              <option value="">Select One...</option>
              <option value="남">남</option>
              <option value="여">여</option>
              <option value="모르겠음">모르겠음</option>
            </select>
          </span>
          {this.petName()}
          {this.reward()}
        </div>
        <div className="explanation">
          <input
            type="text"
            name="explanation"
            size="100"
            placeholder="특징 및 상세 설명"
            value={this.state.contentsData}
            onChange={this.makeContentsData}
          />
        </div>
        <div className="submitButton">
          <button
            type="submit"
            onClick={async () => {
              await this.makePostDate()
              await this.makePostData()
              await this.submitData()
            }}
          >
            등록하기
          </button>
        </div>
        {console.log(this.state.imageData, 'postimmmmmmgggdata')}
      </div>
    )
  }
}

export default withRouter(Post)
