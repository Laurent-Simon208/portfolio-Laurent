<div class="outer">
    <div class="inner">
        <div class="element">
            <img src={selectedWork.image} alt="Image du site" className='modal-iii' />
        </div>
    </div>
</div>
.wrap - works {
    width: 100 %;
    background - color: rgb(22, 20, 45);
    height: 100 %;
    border - radius: 0px 0px 0px 100px;
    -webkit - border - radius: 0px 0px 0px 20 % / 0px 0px 0px 250px;
    position: relative;

    .wrapper - works {
        padding - bottom: 100px;
        position: relative;
        width: 100 %;

        .works - h1 {
            color: white;
            font - size: 70px;
            font - weight: 100;
            margin - left: 120px;
            padding - top: 20px;
        }

        .cards - projet {
            display: grid;
            grid - template - columns: 1fr 1fr;
            gap: 50px;
            height: 100 %;
            margin: 30px 120px;

            .card - description {
                display: none;
            }

            .card - projet {
                width: 100 %;
                background - repeat: no - repeat;
                box - shadow: 0px 0px 30px 0px rgb(255, 194, 138);
                background - size: cover;
                height: 400px;
                border - radius: 5 %;
                position: relative;

                &::before {
                    content: "";
                    position: absolute;
                    width: 100 %;
                    height: 100 %;
                    border - radius: 5 %;
                    background - image: linear - gradient(to top, rgb(22, 20, 45), transparent);
                }

                &:hover {
                    cursor: pointer;

                    &::before {
                        content: "";
                        position: absolute;
                        width: 100 %;
                        height: 100 %;
                        border - radius: 5 %;

                    }

                    .card - description {
                        font - size: 45px;
                        display: block;
                        width: 100 %;
                        position: absolute;
                        bottom: 45 %;
                        text - align: center;
                        font - weight: 500;
                        color: white;
                    }
                }

            }
        }
    }

    .modal.iii {
        width: 90 %;
    }
}