import {Component} from 'react';
import Axios from 'axios';

class Newsletter extends Component {
    constructor() {
        super();

        this.newsletterInputText = '';
        this.clearValidTime = 5000;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.newsletterInputText = e.target.value;

    }

    handleSubmit(e) {
        e.preventDefault();
        const input = document.querySelector('#newsletter-input');
        if (this.newsletterInputText && /\w+@\w+\.\w+/.test(this.newsletterInputText)) {
            input.classList.remove('is-invalid');

            Axios.post('/api/email', {email: this.newsletterInputText})
                .then((res) => {
                    console.log(res);
                    input.classList.add('is-valid')
                    setTimeout(() => {
                        input.classList.remove('is-valid')
                    }, this.clearValidTime)
                });
        } else {
            input.classList.add('is-invalid');
        }
    }

    render() {
        return (
            <div id="newsletter">
                <div className="container">

                    <form onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="col-1 col-sm-0"></div>
                            <div className="input-group mb-3 col-10">
                                <input id="newsletter-input"
                                    type="email"
                                    className="form-control"
                                    placeholder="Email Address"
                                    onChange={this.handleInputChange}/>

                                <div className="input-group-append">
                                    <button className="btn btn-secondary" type="submit">Subscribe</button>
                                </div>

                                <div className="valid-feedback">Thanks! We've added you to our email list.</div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Newsletter;
