import React from "react"

function Weather(props) {
        const {city, country, temperature, latitude, longitude, description, error} = props
        return (
            <div className="weather__info">
                {
                    props.city && props.country && <p className="weather__key">Location: 
                   <span className="weather__value"> {city}, {country}</span>
                   </p>
                }
                {
                    props.longitude && <p className="weather__key">longitude: 
                    <span className="weather__value"> {longitude}</span>
                    </p>
                }
                
                {
                    props.latitude && <p className="weather__key">latitude:
                   <span className="weather__value"> {latitude}</span>
                   </p>
                }
                {
                    props.temperature && <p className="weather__key">Temperature:
                    <span className="weather__value"> {temperature} c</span>
                     </p>
                }
                {
                    props.description && <p className="weather__key">Description:
                     <span className="weather__value"> {description}</span>
                     </p>
                }
                {
                    props.error && <p className="weather__error">{error}</p>
                }
            </div>
        )
}

export default Weather