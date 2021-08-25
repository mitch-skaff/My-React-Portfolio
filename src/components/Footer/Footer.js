import React from 'react';
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="bg-dark text-center text-white appbar-footer">
            <div className="container p-4">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="mailto:mskaff904@gmail.com" role="button"
                        ><i className="fa fa-google"></i></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://www.linkedin.com/in/mitchel-skaff/" role="button"
                        ><i className="fa fa-linkedin"></i></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="https://github.com/mitch-skaff" role="button"
                        ><i className="fa fa-github"></i></a>
                </section>
            </div>
            <div>
                <p>Hope to connect one day!</p>
                <p>&copy; Mitchel Skaff</p>
            </div>
        </footer>
    );
}