# Training a LSTM neural Network

> Multi-layer Recurrent Neural Networks (LSTM, RNN) for character-level language models in Python using Tensorflow and modified to work with [tensorflow.js](https://js.tensorflow.org/) and [ml5js](https://ml5js.org/)

>  Based on [char-rnn-tensorflow](https://github.com/sherjilozair/char-rnn-tensorflow).

> [Here](https://www.youtube.com/watch?v=xfuVcfwtEyw) is a video to help you get started with training LSTM with [Spell](https://www.spell.run/)

> _(original by [yining1023](https://github.com/yining1023))_

## outline
  - [Requirements](#requirements)
    - [macOs installation](#macos-installation)
    - [windows installation](#windows-installation)
  - [getting started with LSTM](#getting-started-with-lstm)
    - [collect data](#collect-data)
    - [train on own machine](#train-on-own-machine)
    - [train on spell](#train-on-spell)
    - [use it!](#use-it)
## Requirements

Set up a __python environment__ with tensorflow installed (original instruction [here](https://ml5js.org/docs/training-setup.html))

### macOs installation

1. install miniconda from [here](https://docs.conda.io/en/latest/miniconda.html)
   1. choose Python 3.7 (bash installer) and download
   
   2. open terminal and type
   
   3. ```bash
      bash path/to/file/just/downloaded
      #usually is in /Downloads/file_name
      #you ca also type bash [blank space] and drag the file onto terminal
      ```
   
   5. Review the license and approve the license terms - type in `yes` and press enter
   
   6. Press `Enter` again to confirm the location of install
   
   7. Type `yes` when it asks you if the install location should be prepended to PATH
   
   8. Restart Terminal for changes to take effect
   
   9. Type: `conda info`
   
   10. If it prints out some stuff then it has installed correctly
   
2. create environment (you should create environments for each neural network: for example one for __LSTM__ one for __pix2pix__) __important:__ consistency between python version and tensorflow version

   ```bash
   conda create -n env_name python=3.5.2
   # create conda environment named env_name [choose a proper one] and python version 3.5.2
   ```

3. turn off conda by default

   1. Edit `.bash_profile` or `.zshrc` (if using zsh)

   ```bash
   nano .bash_profile
   #OR
   nano .zshrc
   #opens .bash_profile  or .zshrc on nano editor inside the terminal
   ```

   2. find this

   ```bash
   # added by Miniconda3 4.3.11 installer
   export PATH="/Users/yourname/miniconda3/bin:$PATH"
   ```

   3. change to this

   ```bash
   alias start_conda='PATH="/Users/yourname/miniconda3/bin:$PATH"'
   #replace yourname to your user name
   ```

   4. restart the terminal and type `start_conda` to change to the python version for conda

4. activate environment

   ```bash
   source activate env_name
   ```

### windows installation

_(it is possible to find the original instructions [here](https://docs.conda.io/projects/conda/en/latest/user-guide/install/windows.html))_

1. Download the `(exe installer)` file form [here](https://docs.conda.io/en/latest/miniconda.html), check your system if it is 64 or 32 bit

2. follow the instruction on the screen and accept the default settings

3. test the installation by typing in the prompt

   ```bash
   conda list
   ```
### getting started with LSTM

Start by [downloading](https://github.com/s4ac/LSTM-train-and-deploy.git) or cloning this repository:

  ```bash
  git https://github.com/s4ac/LSTM-train-and-deploy.git
  cd LSTM-train-and-deploy
  ```

### collect data

LSTMs work well when you want predict sequences or patterns from your inputs. Try to gather as much input data as you can. The more the better!

__where to find data?__

* [project gutenberg](https://www.gutenberg.org/wiki/Main_Page)
* [opus](http://opus.nlpl.eu/index.php)

__do a data clean up!__

Once your data is ready, create a new folder in the `root` of this project and inside that folder you should have one file called `input.txt` that contains all your training data.

_(A quick tip to concatenate many small disparate `.txt` files into one large training file: `ls *.txt | xargs -L 1 cat >> input.txt`)_

### train on own machine

Run the training script with the default settings:

  ```bash
  #turn on conda environment
  source activate env_name
  #install requirements
  python -r requirements.txt
  #train the model
  python train.py --data_dir=./folder_with_my_custom_data
  #the folder where the input.txt file is
  ```

Or you can specify the hyperparameters you want depending on the training set, size of your data, etc:

```bash
python train.py --data_dir=./folder_with_my_custom_data --rnn_size 128 --num_layers 2 --seq_length 64 --batch_size 32 --num_epochs 1000 --save_model ./models --save_checkpoints ./checkpoints
```

This will train your model and save a JavaScript version **in a folder called `./models`**, if you don't specify a different path.
### train on spell
spell works better in combination with __git__
1. make an account on [spell](https://web.spell.run)
2. install __spell__ on your machine
   ```bash
   pip install spell
   ```
3. run on spell server
      ```bash
     #train the model
     spell run "python train.py --data_dir=./folder_with_my_custom_data"
     #the folder where the input.txt file is
     ```


### use it!

Go to [deploy](https://github.com/s4ac/LSTM-train-and-deploy/tree/master/deploy), to see 👀 how to use the model to generate text

Once the model is ready, you'll just need to point to it in your ml5 sketch:

```javascript
const lstm = new ml5.charRNN('./models/your_new_model');
```

That's it!
