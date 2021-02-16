import React, {Component} from 'react'


class Fraction extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
            
          nom100k : 100000,
          count100k : 0,
          
          nom50k : 50000,
          count50k : 0,
          
          nom20k : 20000,
          count20k : 0,
          
          nom10k : 10000,
          count10k : 0,
          
          nom5k : 5000,
          count5k : 0,
          
          nom2k : 2000,
          count2k : 0,

          nom1k : 1000,
          count1k : 0,

          nom500 : 500,
          count500 : 0,

          nom200: 200,
          count200 : 0,

          nom100 : 100,
          count100 : 0,

          sisa : 0
    };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
      if (this.state.value > 1000000000) {this.setState({value : 1000000000})};
    }
  
    handleSubmit(event) {
    //   alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
      var val = this.state.value
      var _val = val
      var reg = new RegExp('^[0-9]+$');
      if (val.length > 10) {
          alert('the number is to long')
      }
      else if (val < 99) {
          alert('minimum value is 99')
      }
      else if (!reg.test(val)) {
          alert('not a number')
      }
      else {

          this.setState({count100k : Math.floor(_val/this.state.nom100k)})
            _val = _val-(Math.floor(_val/this.state.nom100k)*this.state.nom100k)
              
            this.setState({count50k : Math.floor(_val/this.state.nom50k)});
            _val = _val-(Math.floor(_val/this.state.nom50k)*this.state.nom50k);

            this.setState({count20k : Math.floor(_val/this.state.nom20k)});
            _val = _val-(Math.floor(_val/this.state.nom20k)*this.state.nom20k);

            this.setState({count10k : Math.floor(_val/this.state.nom10k)});
            _val = _val-(Math.floor(_val/this.state.nom10k)*this.state.nom10k);

            this.setState({count5k : Math.floor(_val/this.state.nom5k)});
            _val = _val-(Math.floor(_val/this.state.nom5k)*this.state.nom5k);

            this.setState({count2k : Math.floor(_val/this.state.nom2k)});
            _val = _val-(Math.floor(_val/this.state.nom2k)*this.state.nom2k);

            this.setState({count1k : Math.floor(_val/this.state.nom1k)});
            _val = _val-(Math.floor(_val/this.state.nom1k)*this.state.nom1k);

            this.setState({count500 : Math.floor(_val/this.state.nom500)});
            _val = _val-(Math.floor(_val/this.state.nom500)*this.state.nom500);

            this.setState({count200 : Math.floor(_val/this.state.nom200)});
            _val = _val-(Math.floor(_val/this.state.nom200)*this.state.nom200);

            this.setState({count100 : Math.floor(_val/this.state.nom100)});
            _val = _val-(Math.floor(_val/this.state.nom100)*this.state.nom100)

            this.setState({sisa : _val})
            console.log(_val)
            // console.log(nominal.seratus_ribu.count, nominal.limapuluh_ribu.count)
        // }
      }
    }
  
    render() {
      return (
          <div>
                Calculate your money fraction
            <form onSubmit={this.handleSubmit}>
                <input className="inputNumber" type="text" value={this.state.value} onChange={this.handleChange} />
                <input className="inputNumber" type="submit" value="Calculate" />
            </form>
            <div className="fraction">
                { this.state.count100k !== 0 &&
                    <p>
                    {new Intl.NumberFormat().format(this.state.nom100k)} (x{this.state.count100k}),&nbsp;
                    </p>
                }
                { this.state.count50k !== 0 &&
                    <p>
                    {new Intl.NumberFormat().format(this.state.nom50k)} (x{this.state.count50k}),&nbsp;
                    </p>
                }
                { this.state.count20k !== 0 &&
                    <p>
                    {new Intl.NumberFormat().format(this.state.nom20k)} (x{this.state.count20k}),&nbsp;
                    </p>
                }
                { this.state.count10k !== 0 &&
                    <p>
                    {new Intl.NumberFormat().format(this.state.nom10k)} (x{this.state.count10k}),&nbsp;
                    </p>
                }
                { this.state.count5k !== 0 &&
                    <p>
                    {new Intl.NumberFormat().format(this.state.nom5k)} (x{this.state.count5k}),&nbsp;
                    </p>
                }
                { this.state.count2k !== 0 &&
                    <p>
                    {new Intl.NumberFormat().format(this.state.nom2k)} (x{this.state.count2k}),&nbsp;
                    </p>
                }
                { this.state.count1k !== 0 &&
                    <p>
                    {new Intl.NumberFormat().format(this.state.nom1k)} (x{this.state.count1k}),&nbsp;
                    </p>
                }
                { this.state.count500 !== 0 &&
                    <p>
                    {new Intl.NumberFormat().format(this.state.nom500)} (x{this.state.count500}),&nbsp;
                    </p>
                }
                { this.state.count200 !== 0 &&
                    <p>
                    {new Intl.NumberFormat().format(this.state.nom200)} (x{this.state.count200}),&nbsp;
                    </p>
                }
                { this.state.count100 !== 0 &&
                    <p>
                    {new Intl.NumberFormat().format(this.state.nom100)} (x{this.state.count100}),&nbsp;
                    </p>
                }
                {this.state.sisa !== 0 &&
                    <p>
                        Left {this.state.sisa}
                    </p>
                }
            </div>
          </div>
      );
    }
  }
  
  export default(Fraction)