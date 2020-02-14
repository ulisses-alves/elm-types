port module App exposing (main)

import Browser
import Html as H


main : Program Flags Model Msg
main =
    Browser.document
        { init = init
        , update = update
        , subscriptions = subscriptions
        , view = view
        }


type alias Flags =
    { initialCounter : Int
    }


type alias Model =
    { counter : Int
    }


type Msg
    = RequestIncrement Int


port requestIncrement : (Int -> msg) -> Sub msg


port respondIncrement : Int -> Cmd msg


init : Flags -> ( Model, Cmd Msg )
init flags =
    ( { counter = flags.initialCounter }, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        RequestIncrement amount ->
            let
                newCounter =
                    model.counter + amount
            in
            ( { model | counter = newCounter }
            , respondIncrement newCounter
            )


subscriptions : Model -> Sub Msg
subscriptions _ =
    requestIncrement RequestIncrement


view : Model -> Browser.Document Msg
view model =
    { title = "elm-types example"
    , body =
        [ H.text (String.fromInt model.counter)
        ]
    }
